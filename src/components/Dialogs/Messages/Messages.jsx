import Message from './Message/Message'
import MessageCreate from './MessageCreate/MessageCreate';
import s from "./Messages.module.css";

export default function DialogItem(props) {
    let messagesRender = props.messages.map(
        m => <Message text={m.text} date={m.date} who={m.who}
    />
    )

    return (
        <div className={s.messages}>
            <div className={s.messagesList}>
                { messagesRender }
            </div>

            <div className={s.newMessageSection}>
                <MessageCreate newMessageText={props.newMessageText} updateText={props.updateText} addMessage={props.addMessage}/>
            </div>
        </div>
    );
}
