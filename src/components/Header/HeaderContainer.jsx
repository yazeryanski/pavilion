import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setUser } from "../../Redux/Reducers/authReducer";
import api from "../../api";

class HeaderContainer extends React.Component {
    componentWillMount() {
        api.checkLogin()
            .then((res) => {
                let {id, login, email} = res;
                this.props.setUser(id, login, email);
            })
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

export default connect(mapStateToProps, { setUser })(HeaderContainer);
