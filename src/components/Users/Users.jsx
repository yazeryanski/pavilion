import React from "react";
import { TheUser } from "./TheUser/TheUser";
import s from "./Users.module.css";
import Pagination from "./Pagination/Pagination";
import Preloader from "../Preloader/Preloader";
import { NavLink } from "react-router-dom";

export default class Users extends React.Component {
    render() {
        let renderedUsers = this.props.users.map((user) => {
            return (
                <NavLink
                    to={`/profile/${user.id}`}
                    className={s.userColumn}
                    key={user.id}
                >
                    <TheUser
                        flwDisabled={this.props.flwProgressList.some(id => id === user.id)}
                        toggleFollow={this.props.toggleFollow}
                        info={user}
                    />
                </NavLink>
            );
        });

        return (
            <div className={s.usersPage}>
                <h1 className={s.title}>Users</h1>
                <div className={s.usersList}>
                    {this.props.isFetching ? <Preloader /> : renderedUsers}
                </div>
                <Pagination
                    allUsersCount={this.props.allUsersCount}
                    usersPerPage={this.props.usersPerPage}
                    currentPage={this.props.currentPage}
                    pageClick={(p) => this.props.pageClick(p)}
                />
            </div>
        );
    }
}
