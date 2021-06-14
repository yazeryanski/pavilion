import { connect } from "react-redux";
import AuthRedirect from "../../hoc/AuthRedirect";
import Dialogs from "./Dialogs";

let AuthRedirectComponent = AuthRedirect(Dialogs)

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
        isAuth: state.auth.isLogined
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
)(AuthRedirectComponent);

export default DialogsContainer;
