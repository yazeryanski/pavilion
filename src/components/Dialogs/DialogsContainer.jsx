import { connect } from "react-redux";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateText(text) {
            dispatch({
                type: "UPDATE-NEW-MESSAGE-TEXT",
                val: text,
            });
        },

        addMessage() {
            dispatch({
                type: "ADD-MESSAGE",
            });
            dispatch({
                type: "UPDATE-NEW-MESSAGE-TEXT",
                val: "",
            });
        },
    };
};
const DialogsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dialogs);

export default DialogsContainer;