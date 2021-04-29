import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import store from "./Redux/reduxStore";
import App from "./App";

function renderUpdate(state) {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById("root")
    );
}

store.subscribe(() => {
    let state = store.getState();
    renderUpdate(state)
});

// First render
renderUpdate(store.getState());