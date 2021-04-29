import dialogsReducer from './Reducers/dialogsReducer';
import profileReducer from './Reducers/profileReducer';
import sidebarReducer from './Reducers/sidebarReducer';
import { combineReducers, createStore } from "redux";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
});
let store = createStore(reducers);

export default store;