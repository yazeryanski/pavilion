import dialogsReducer from './Reducers/dialogsReducer';
import profileReducer from './Reducers/profileReducer';
import sidebarReducer from './Reducers/sidebarReducer';
import usersReducer from './Reducers/usersReducer';
import authReducer from './Reducers/authReducer';
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddlware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddlware));


window.store = store;
export default store;