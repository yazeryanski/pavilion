import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { initProfile } from "../../Redux/Reducers/profileReducer";
import { withRouter } from "react-router";
import AuthRedirect from "../../hoc/AuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        this.props.initProfile(userId);
    }

    render() {
        return <Profile isLogined={this.props.isLogined} profile={this.props.profile}/>;
    }
}

let AuthRedirectComponent = AuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isLogined,
})

let mapDispatchToStore = {
    initProfile,
}

let ContainerComponentWithRouter = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, mapDispatchToStore)(ContainerComponentWithRouter);