import { connect } from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    window.store = state;
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost() {
            dispatch({ type: "ADD-POST" });
            dispatch({ type: "UPDATE-NEW-POST-TEXT", val: "" });
        },

        updateTextarea(text) {
            dispatch({ type: "UPDATE-NEW-POST-TEXT", val: text });
        },
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
