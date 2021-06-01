import s from "./ProfileInfo.module.css";
import userImage from "../../../assets/images/user-image.png";
export default function ProfileInfo({profile}) {
    return (
        <div className={s.userImages}>
            <div className={s["userImages-coverSection"]}>
                <div className={s["userImages-overlay"]}></div>
                <img
                    className={s["userImages-cover"]}
                    src="https://ebrdgreencities.com/assets/headers/bffc190ea7/yerevan-header.jpg"
                    alt="Cover"
                ></img>
                <h1 className={s["user-name"]}>{profile.fullName}</h1>
            </div>
            <img
                className={s["userImages-main"]}
                src={profile.photos.large ? profile.photos.large : userImage}
                alt="User"
            />
        </div>
    );
}
