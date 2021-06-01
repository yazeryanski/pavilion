import dialogsReducer from './Reducers/dialogsReducer';
import profileReducer from './Reducers/profileReducer';
import sidebarReducer from './Reducers/sidebarReducer';
import usersReducer from './Reducers/usersReducer';
import authReducer from './Reducers/authReducer';
import { combineReducers, createStore } from "redux";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});
let store = createStore(reducers);


window.store = store;
export default store;