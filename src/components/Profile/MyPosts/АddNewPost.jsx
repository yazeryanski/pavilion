import React from 'react';
import { Field, reduxForm } from 'redux-form';

const АddNewPost = (props) => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                placeholder="What's new ?"
                name="NewPostText"
                component="textarea"
            />
            <button>Post</button>
        </form>
    );
}

export default reduxForm({form: 'newPostText'})(АddNewPost);
