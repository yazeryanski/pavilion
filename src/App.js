import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

function App(props) {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <HeaderContainer />

                <div className="container wrapper-container">
                    <Sidebar />
                    <article className="cont">
                        <Route
                            path="/profile/:userId?"
                            render={function () {
                                return <ProfileContainer />;
                            }}
                        />

                        <Route
                            path="/dialogs"
                            render={function () {
                                return <DialogsContainer />;
                            }}
                        />

                        <Route
                            path="/users"
                            render={function () {
                                return <UsersContainer />;
                            }}
                        />

                        <Route
                            path="/login"
                            render={function () {
                                return <Login />;
                            }}
                        />
                    </article>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
