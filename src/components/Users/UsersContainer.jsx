import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
    toggleFollowAC,
    setUsersAC,
    pageClickAC,
    setAllUsersCountAC,
    togglePreloaderAC,
} from "../../Redux/Reducers/usersReducer";
import api from '../../api';


class UsersAPIContainer extends React.Component {
    getUsers(page, count) {
        console.log(this);
        api.getUsers(count, page)
            .then((res) => {
                this.props.togglePreloader(false);
                this.props.setUsers(res.items);
                this.props.setAllUsersCount(res.totalCount);
            })
    }

    pageChanged = (p) => {
        this.props.togglePreloader(true);
        this.props.pageClick(p);
        this.getUsers(p, this.props.usersPerPage);
    };

    toggleFollowAPI(type = "follow", id) {
        
        if (type === "follow") {
            api.follow(id).then(res => this.props.toggleFollow(id))
        } else if (type === 'unfollow') {
            api.unfollow(id).then( res => this.props.toggleFollow(id) );
        }
    }

    render() {
        return (
            <Users
                users={this.props.users}
                allUsersCount={this.props.allUsersCount}
                usersPerPage={this.props.usersPerPage}
                currentPage={this.props.currentPage}
                isFetching={this.props.isFetching}
                pageClick={this.pageChanged}
                toggleFollow={this.toggleFollowAPI.bind(this)}
            />
        );
    }

    componentDidMount() {
        this.props.togglePreloader(true);
        this.getUsers(this.props.currentPage, this.props.usersPerPage);
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        allUsersCount: state.usersPage.allUsersCount,
        usersPerPage: state.usersPage.usersPerPage,
        isFetching: state.usersPage.isFetching,
    };
};

let mapDispatchToStore = (dispatch) => {
    return {
        toggleFollow(id) {
            dispatch(toggleFollowAC(id));
        },
        setUsers(users) {
            dispatch(setUsersAC(users));
        },
        setAllUsersCount(count) {
            dispatch(setAllUsersCountAC(count));
        },
        pageClick(page) {
            dispatch(pageClickAC(page));
        },
        togglePreloader(value) {
            dispatch(togglePreloaderAC(value));
        },
    };
};

const UsersContainer = connect(
    mapStateToProps,
    mapDispatchToStore
)(UsersAPIContainer);

export default UsersContainer;
