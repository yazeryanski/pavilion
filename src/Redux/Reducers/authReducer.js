import api from "../../api";

const SET_USER = "SET_USER";

const initialState = {
    id: null,
    login: null,
    email: null,
    isLogined: false,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                ...action.data,
                isLogined: true
            };
        }
        default:
            return state;
    }
};

export default profileReducer;

const setUser = (id, login, email) => {
    let data = {
        id,
        login,
        email
    }

    return {type: SET_USER, data}
}
// Redux thunk

export const checkLogin = () => {
    return dispatch => {
        api.checkLogin()
        .then((res) => {
            let {id, login, email} = res;
            dispatch(setUser(id, login, email));
        })
    }
}