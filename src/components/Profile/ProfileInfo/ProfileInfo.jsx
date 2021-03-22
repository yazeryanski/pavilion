import s from "./ProfileInfo.module.css";

export default function ProfileInfo() {
    return (
        <div className={s.userImages}>
            <div className={s["userImages-coverSection"]}>
                <div className={s["userImages-overlay"]}></div>
                <img
                    className={s["userImages-cover"]}
                    src="https://ebrdgreencities.com/assets/headers/bffc190ea7/yerevan-header.jpg"
                    alt="Cover"
                ></img>
                <h1 className={s["user-name"]}>John Smith</h1>
            </div>
            <img
                className={s["userImages-main"]}
                src="https://www.peoplepuzzles.co.uk/wp-content/uploads/2019/12/John-Smith1-01.jpg"
                alt="User"
            />
        </div>
    );
}
