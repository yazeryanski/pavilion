const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
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
        case ADD_POST:
            state.posts.push({
                id: state.posts.length, //AutoIncrement ID
                text: state.newPostText,
                date: new Date().toLocaleString(),
            });
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.val;
            return state;
        default:
            return state;
    }
};

export default profileReducer;
