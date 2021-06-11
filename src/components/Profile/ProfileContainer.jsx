import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { initProfile } from "../../Redux/Reducers/profileReducer";
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        this.props.initProfile(userId);
    }

    render() {
        return <Profile profile={this.props.profile}/>;
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let mapDispatchToStore = {
    initProfile,
}

let ContainerComponentWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToStore)(ContainerComponentWithRouter);