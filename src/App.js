import "./App.css";
import "./font-awesome-pro.css";

function App() {
    return (
        <div className="Wrapper">
            <header>
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.g4f-records.com%2Fen%2Fqui-sommes-nous%2Flogo-facebook-2%2F&psig=AOvVaw3BNSIfozgr06zMGLFNR2UT&ust=1616004292154000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCE1qSzte8CFQAAAAAdAAAAABAK" />
            </header>

            <nav className="sidebar">
                <ul className="menuList">
                    <li className="menuItem">
                        <i class="fal fa-user-circle menuItem-icon"></i>

						<a href="#s">My Profile</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default App;
