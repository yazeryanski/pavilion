import { connect } from "react-redux";
import { compose } from "redux";
import AuthRedirect from "../../hoc/AuthRedirect";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
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

        addMessage(newMessageBody) {
            dispatch({
                type: "ADD-MESSAGE", newMessageBody, 
            });
        },
    };
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    AuthRedirect
)(Dialogs);
