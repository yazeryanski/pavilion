import React from "react";
import Post from "../../Post/Post";
import s from "./MyPosts.module.css";
import AddNewPost from './АddNewPost';

export default function MyPosts(props) {
    let addNewPost = (val) => {
        props.addNewPost(val.NewPostText);
    };


    let postsRender = props.posts.map((p) => (
        <Post text={p.text} date={p.date} key={p.id}/>
    ));

    return (
        <div className={s.myPosts}>
            <h2 className="sectionTitle">New Post</h2>
            <div className={s.newPost}>
                <AddNewPost onSubmit={addNewPost}/>
            </div>

            <h2 className="sectionTitle">My Posts</h2>
            <div className={s.MyPosts}>{postsRender}</div>
        </div>
    );
}
