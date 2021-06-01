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

export const setUser = (id, login, email) => {
    let data = {
        id,
        login,
        email
    }

    return {type: SET_USER, data}
}