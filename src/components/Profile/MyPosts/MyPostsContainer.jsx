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
        addNewPost(newPostText) {
            dispatch({ type: "ADD-POST", newPostText });
        }
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
