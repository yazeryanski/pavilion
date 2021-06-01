import React from "react";
import s from "./TheUser.module.css";
import UserDefaultImage from '../../../assets/images/user.png';

export class TheUser extends React.Component {
    render() {
        return (
            <div className={s.user}>
                <img
                    src={this.props.info.photos.small === null ? UserDefaultImage : this.props.info.photos.small}
                    alt={this.props.info.name + "'s photo"}
                />
                <h3>{this.props.info.name}</h3>
                <p className={s.userStatus}>{this.props.info.status}</p>
                <span className={s.userLocation}>
                    Moscow, Russia
                </span>

                <div className={s.overlay}>
                    <button
                        onClick={(e) =>{
                            e.preventDefault();
                            if (this.props.info.followed) {
                                this.props.toggleFollow('unfollow', this.props.info.id)
                            } else {
                                this.props.toggleFollow('follow', this.props.info.id)
                            }
                        }
                        }
                        className={
                            (this.props.info.followed
                                ? s.btnUnfollow
                                : s.btnFollow) +
                            " " +
                            s.btn
                        }
                    >
                        {this.props.info.followed ? "X Unfollow" : "+ Follow"}
                    </button>
                </div>
            </div>
        );
    }
}
