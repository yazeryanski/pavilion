import LikeButton from "../LikeButton";
import s from "./Post.module.css";

export default function Post(props) {
    return (
        <div className={s.post}>
            <div className={s.postHeader}>
                <img
                    className={s.postThumbnail}
                    src="https://www.peoplepuzzles.co.uk/wp-content/uploads/2019/12/John-Smith1-01.jpg"
                    alt="Thumbnail"
                />
                <h4>John Smith</h4>

                <span className={s.postDate}>{props.date}</span>
            </div>

            <p className={s.postText}>{props.text}</p>

            <LikeButton />
        </div>
    );
}
