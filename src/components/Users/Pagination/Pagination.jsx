import React from "react";
import s from "./Pagination.module.css";
import ReactPagination from "react-js-pagination";

export default class Pagination extends React.Component {
    pageClicked(i) {
        this.props.pageClick(i);
    }

    render() {
        return (
            <div className={s.pagination}>
                <ReactPagination
                    activePage={this.props.currentPage}
                    itemsCountPerPage={this.props.usersPerPage}
                    totalItemsCount={this.props.allUsersCount}
                    pageRangeDisplayed={5}
                    onChange={this.pageClicked.bind(this)}

                    disabledClass={s.disabled}
                    activeClass={s.active}
                />
            </div>
        );
    }
}
