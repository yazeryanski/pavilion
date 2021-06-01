const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const PAGE_CLICK = "PAGE_CLICK";
const SET_ALL_USERS_COUNT = "SET_ALL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
    users: [],
    allUsersCount: 0,
    currentPage: 1,
    usersPerPage: 10,
    isFetching: false,
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: !u.followed };
                    }
                    return u;
                }),
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            };
        case SET_ALL_USERS_COUNT:
            return {
                ...state,
                allUsersCount: action.count
            }
        case PAGE_CLICK:
            return {
                ...state,
                currentPage: action.page
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.value
            }
        default:
            return state;
    }
};

export default dialogsReducer;

// Action Creators
export const toggleFollowAC = (userId) => {
    return { type: TOGGLE_FOLLOW, userId };
};

export const setUsersAC = (users) => {
    return { type: SET_USERS, users };
};

export const setAllUsersCountAC = (count) => {
    return { type: SET_ALL_USERS_COUNT, count}
};

export const pageClickAC = (page) => {
    return { type: PAGE_CLICK, page}
}

export const togglePreloaderAC = (value) => {
    return { type: TOGGLE_IS_FETCHING, value }
}
