import s from "./ProfileInfo.module.css";
import React, { Component } from 'react';
import userImage from "../../../assets/images/user-image.png";
import ProfileStatus from './ProfileStatus/ProfileStatus';



class ProfileInfo extends Component {

    constructor() {
        super();
        this.state = { statusEditable: false };
    }


    render() {
        return (
            <div className={s.userImages}>
                <div className={s["userImages-coverSection"]}>
                    <div className={s["userImages-overlay"]}></div>
                    <img
                        className={s["userImages-cover"]}
                        src="https://ebrdgreencities.com/assets/headers/bffc190ea7/yerevan-header.jpg"
                        alt="Cover"
                    ></img>
                    <h1 className={s["user-name"]}>{this.props.profile.fullName}</h1>
                    <ProfileStatus status={this.props.status} updateStatus={this.props.updateStatus} />
                </div>
                <img
                    className={s["userImages-main"]}
                    src={this.props.profile.photos.large ? this.props.profile.photos.large : userImage}
                    alt="User"
                />
            </div>
        );
    }
}

export default ProfileInfo;

