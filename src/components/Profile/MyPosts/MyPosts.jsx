import React from "react";
import Button from "../../Button/Button";
import Post from "../../Post/Post";
import s from "./MyPosts.module.css";

export default function MyPosts(props) {
    let newPostText = React.createRef();

    let addNewPost = (e) => {
        e.preventDefault();
        props.addNewPost();
    };

    let updateTextarea = () => {
        let text = newPostText.current.value;
        props.updateTextarea(text);
    };

    let postsRender = props.posts.map((p) => (
        <Post text={p.text} date={p.date} key={p.id}/>
    ));

    return (
        <div className={s.myPosts}>
            <h2 className="sectionTitle">New Post</h2>
            <div className={s.newPost}>
                <textarea
                    ref={newPostText}
                    placeholder="What's new ?"
                    value={props.newPostText}
                    onChange={updateTextarea}
                />
                <Button
                    onClick={addNewPost}
                    link="#"
                    title="Post"
                    type="action"
                ></Button>
            </div>

            <h2 className="sectionTitle">My Posts</h2>
            <div className={s.MyPosts}>{postsRender}</div>
        </div>
    );
}
