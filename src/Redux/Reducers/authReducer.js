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
                ...action.data
            };
        }
        default:
            return state;
    }
};

export default profileReducer;

const setUser = (id, login, email, isLogined) => {
    let data = {
        id,
        login,
        email,
        isLogined
    }

    return {type: SET_USER, data}
}

// Redux thunk
export const checkLogin = () => {
    return dispatch => {
        api.checkLogin()
        .then((res) => {
            let {id, login, email} = res;
            dispatch(setUser(id, login, email, true));
        })
    }
}

export const login = (email, password, rememberMe) => {
    return dispatch => {
        api.login(email, password, rememberMe)
            .then(res => {
                dispatch(checkLogin())
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export const logout = () => {
    return dispatch => {
        api.logout().then(dispatch( setUser(null, null, null, false) ));
    }
}