import s from "./Message.module.css";

export default function Message(props) {
    return (
        <div className={s.message + ' ' + s[props.who]}>
            <p className={s.messageText}>
                {props.text}
            </p>

            <span className={s.messageDate}>
                {props.date}
            </span>
        </div>
    );
}
