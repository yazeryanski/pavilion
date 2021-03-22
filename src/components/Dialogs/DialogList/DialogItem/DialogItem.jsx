import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

export default function DialogItem(props) {
    return (
        <div className={s.dialogItem}>
            <span className={s.dialogStatus}></span>
            <NavLink
                to={"/dialogs/" + props.id}
                className={s.dialog}
                activeClassName={s.active}
            >
                {props.name}
            </NavLink>
        </div>
    );
}
