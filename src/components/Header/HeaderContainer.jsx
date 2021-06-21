import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { checkLogin, logout } from "../../Redux/Reducers/authReducer";

class HeaderContainer extends React.Component {
    componentWillMount() {
        this.props.checkLogin();
    }
    render() {
        return <Header {...this.props} />;
    }
}

let mapStateToProps = (state) => {
    return {
        username: state.auth.login,
        isLogined: state.auth.isLogined,
    };
};

export default connect(mapStateToProps, { checkLogin, logout })(HeaderContainer);
