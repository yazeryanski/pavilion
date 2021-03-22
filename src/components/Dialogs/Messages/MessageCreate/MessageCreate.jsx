import s from "./MessageCreate.module.css";

export default function MessageCreate() {
    return (
        <div className={s.newMessage}>
            <textarea placeholder="Type text" className={s.textarea}></textarea>
            <a href="#s" className={s.sendMessage}>
                <i className="fas fa-paper-plane"></i>
            </a>
        </div>
    );
}
