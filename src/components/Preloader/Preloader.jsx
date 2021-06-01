import Loader from "../../assets/images/loader.svg";
import s from "./Preloader.module.css";

export default function Preloader() {
    return (
        <div className={s.container}>
            <img src={Loader} alt="Preloader" />
        </div>
    );
}
