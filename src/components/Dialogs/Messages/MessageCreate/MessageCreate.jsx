import s from "./MessageCreate.module.css";
import React from "react";

export default function MessageCreate(props) {
    let textBox = React.createRef();

    function updateText() {
        let text = textBox.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', val: text });
    }

    function addMessage(e) {
        e.preventDefault();

        props.dispatch({
            type: 'ADD-MESSAGE'
        })
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', val: '' });
    }

    function enterPressed(e) {  
        if (e.keyCode === 13) {
            addMessage(e);
        }
    }


    return (
        <div className={s.newMessage}>
            <textarea
                ref={textBox}
                placeholder="Type text"
                className={s.textarea}
                onChange={updateText}
                value={props.newMessageText}
                onKeyUp={enterPressed}
            ></textarea>
            <a href="#s" className={s.sendMessage} onClick={addMessage}>
                <i className="fas fa-paper-plane"></i>
            </a>
        </div>
    );
}
