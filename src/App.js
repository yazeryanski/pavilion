import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />

                <div className="container wrapper-container">
                    <Sidebar />
                    <article className="cont">
                        <Route path="/profile" render={ () => <Profile state={props.state.profilePage}/>} />
                        <Route path="/dialogs" render={ () => <Dialogs state={props.state.dialogPage}/>} />
                    </article>
                </div>

                
            </div>

        </BrowserRouter>
    );
}

export default App;
