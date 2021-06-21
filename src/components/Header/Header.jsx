import s from './Header.module.css'
import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'

export default function Header(props) {
    return (
        <header className={s.header}>
            <div className={'container ' + s.container}>
                <img
                    alt="logo"
                    src={logo}
                />

                <nav className={s.login}>
                    {props.isLogined ? props.username: <NavLink to="/login">Login</NavLink>}
                    {props.isLogined ? <button onClick={props.logout}>Logout</button>: ''}
                </nav>
            </div>
        </header>
    );
}
