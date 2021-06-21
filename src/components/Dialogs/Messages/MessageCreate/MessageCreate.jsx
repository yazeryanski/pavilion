import s from "./MessageCreate.module.css";
import React from "react";
import { Field, reduxForm } from "redux-form";


function MessageCreate(props) {
    const {handleSubmit} = props;


    return (
        <form className={s.newMessage} onSubmit={handleSubmit}>
            <Field
                name="newMessageBody"
                placeholder="Type text"
                className={s.textarea}
                component="textarea"
            ></Field>
            <button className={s.sendMessage}>
                <i className="fas fa-paper-plane"></i>
            </button>
        </form>
    );
}

export default reduxForm({form: 'newMessage'})(MessageCreate);