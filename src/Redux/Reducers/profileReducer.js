import api from "../../api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_PROFILE = "SET_PROFILE"; 

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
    newPostText: "",
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
                        text: state.newPostText,
                        date: new Date().toLocaleString(),
                    },
                ],
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return { ...state, newPostText: action.val};
        }

        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
};

export default profileReducer;

const setProfile = (profile) => {
    return {type: SET_PROFILE, profile}
}

// Redux Thunk

export const initProfile = (userId) => {
    return (dispatch) => {
        api.getUserDetails(userId)
        .then( res => dispatch( setProfile(res) ) );
    }
}