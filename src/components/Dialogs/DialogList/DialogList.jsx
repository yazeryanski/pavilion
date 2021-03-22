import DialogItem from "./DialogItem/DialogItem";
import s from "./DialogList.module.css";

export default function DialogList(props) {
    let dialogsRender = props.dialogs.map(
        d => <DialogItem name={d.name} id={d.id}></DialogItem>
    )
    return (
        <div className={s.dialogsList}>
            { dialogsRender }
        </div>
    );
}
