import { NavLink } from "react-router-dom";
import s from "./Sidebar.module.css";

export default function Sidebar() {
    return (
        <nav className={s.sidebar}>
            <ul className={s.menuList}>
                <li className={s.menuItem}>
                    <NavLink activeClassName={s.active} to="/profile">
                        <i className="fal fa-user-circle menuItem-icon"></i>
                        <span>My Profile</span>
                    </NavLink>
                </li>

                <li className={s.menuItem}>
                    <NavLink activeClassName={s.active} to="/dialogs">
                        <i className="fal fa-comment-alt-smile"></i>
                        <span>Messages</span>
                    </NavLink>
                </li>

                <li className={s.menuItem}>
                    <NavLink activeClassName={s.active} to="/users">
                        <i className="fal fa-users"></i>
                        <span>Users</span>
                    </NavLink>
                </li>

                <li className={s.menuItem}>
                    <NavLink activeClassName={s.active} to="/news">
                        <i className="fal fa-newspaper"></i>
                        <span>News</span>
                    </NavLink>
                </li>

                <li className={s.menuItem}>
                    <NavLink activeClassName={s.active} to="/music">
                        <i className="fal fa-headphones-alt"></i>
                        <span>Music</span>
                    </NavLink>
                </li>

                <li className={s.menuItem}>
                    <NavLink activeClassName={s.active} to="/settings">
                        <i className="fal fa-cog"></i>
                        <span>Settings</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
