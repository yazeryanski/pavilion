import api from "../../api";

const ADD_POST = "ADD-POST";
const SET_PROFILE = "SET_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
    profile: null,

    posts: [
        {
            id: "0",
            text: "Hello everyone. Who can help me with Javascript?",
            date: "3/23/2021, 11:09:27 PM",
        },

        {
            id: "1",
            text: "React is simpler than Vue!!",
            date: "3/23/2021, 11:09:27 PM",
        },
        {
            id: "2",
            text: "React is cool but, Vue is AMAZING",
            date: "3/23/2021, 11:09:27 PM",
        },
    ],
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: state.posts.length, //AutoIncrement ID
                        text: action.newPostText,
                        date: new Date().toLocaleString(),
                    },
                ],
            };
        }

        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
            
        default:
            return state;
    }
};

export default profileReducer;

//////////////////////////////////////
////////// Action Creators////////////
//////////////////////////////////////
const setProfile = (profile) => {
    return { type: SET_PROFILE, profile }
}

const setStatus = (status) => {
    return { type: SET_STATUS, status}
}

//////////////////////////////////////
////////// Thunk Creators////////////
//////////////////////////////////////
export const initProfile = (userId) => {
    return (dispatch) => {
        api.getUserDetails(userId)
            .then(res => dispatch(setProfile(res)));
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        api.getStatus(userId)
            .then(res => {
                dispatch( setStatus(res.data) );
            });
    }
}

export const updateStatus = (status) => {
    return dispatch => {
        api.setStatus(status)
            .then( res => dispatch( setStatus(status) ) );
    }
}
