import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
    toggleFollow,
    pageClick,
    followingProgress,
    getUsers,
} from "../../Redux/Reducers/usersReducer";


class UsersAPIContainer extends React.Component {
    pageChanged = (p) => {
        this.props.pageClick(p);
        this.props.getUsers(p, this.props.usersPerPage);
    };

    render() {
        return (
            <Users
                users={this.props.users}
                allUsersCount={this.props.allUsersCount}
                usersPerPage={this.props.usersPerPage}
                currentPage={this.props.currentPage}
                isFetching={this.props.isFetching}
                flwProgressList={this.props.flwProgressList}
                pageClick={this.pageChanged}
                toggleFollow={this.props.toggleFollow}
            />
        );
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.usersPerPage);
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        allUsersCount: state.usersPage.allUsersCount,
        usersPerPage: state.usersPage.usersPerPage,
        isFetching: state.usersPage.isFetching,
        flwProgressList: state.usersPage.followingProgress
    };
};

const UsersContainer = connect(
    mapStateToProps,
    {
        toggleFollow,
        pageClick,
        followingProgress,
        getUsers,
    }
)(UsersAPIContainer);

export default UsersContainer;
