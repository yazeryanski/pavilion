import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { initProfile, getStatus, updateStatus } from "../../Redux/Reducers/profileReducer";
import { withRouter } from "react-router";
import AuthRedirect from "../../hoc/AuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 17575;
        }

        this.props.initProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <Profile isLogined={this.props.isLogined} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>;
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

let mapDispatchToStore = {
    initProfile,
    getStatus,
    updateStatus,
}

export default compose(
    connect(mapStateToProps, mapDispatchToStore),
    withRouter,
    AuthRedirect
)(ProfileContainer);