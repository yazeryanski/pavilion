import s from "./Button.module.css";

export default function Button(props) {
    return (
        <a 
            href={props.link} 
            className={s.btn + " " + s[props.type]}
            onClick={props.onClick}
        >
            {props.title}
        </a>
    );
}
