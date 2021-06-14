import Preloader from "../Preloader/Preloader";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Profile(props) {
    if (!props.profile) {
        return <Preloader />
    }


    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile}/>
            <div className={s["profileContent"]}>
                <MyPostsContainer />
            </div>
        </div>
    );
}
