import DialogList from "./DialogList/DialogList";
import s from "./Dialogs.module.css";
import Messages from "./Messages/Messages";

export default function Dialogs(props) {
    return (
        <div className={s.dialogsPage}>
            <DialogList className={s.dialogs} dialogs={props.state.dialogs} />
            <Messages
                className={s.messages}
                messages={props.state.messages}
                addMessage={props.addMessage}
            />
        </div>
    );
}
