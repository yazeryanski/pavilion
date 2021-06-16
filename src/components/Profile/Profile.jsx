import Preloader from "../Preloader/Preloader";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React, { Component } from 'react';


class Profile extends Component {

    render() {

        if (!this.props.profile) {
            return <Preloader />
        }


        return (
            <div className={s.profile}>
                <ProfileInfo profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
                <div className={s["profileContent"]}>
                    <MyPostsContainer />
                </div>
            </div>
        );
    }
}

export default Profile;
