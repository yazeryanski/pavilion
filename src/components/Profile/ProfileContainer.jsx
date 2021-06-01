import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setProfile } from "../../Redux/Reducers/profileReducer";
import { withRouter } from "react-router";
import api from "../../api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        api.getUserDetails(userId)
            .then(res => this.props.setProfile(res));
    }

    render() {
        return <Profile profile={this.props.profile}/>;
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let mapDispatchToStore = {
    setProfile,
}

let ContainerComponentWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToStore)(ContainerComponentWithRouter);