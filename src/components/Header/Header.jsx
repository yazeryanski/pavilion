import s from './Header.module.css'

export default function Header() {
    return (
        <header className={s.header}>
            <div className="container">
                <img
                    alt="logo"
                    src="https://www.g4f-records.com/wp-content/uploads/2016/09/logo-facebook-1024x385.png"
                />
            </div>
        </header>
    );
}
