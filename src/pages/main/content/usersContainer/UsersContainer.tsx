import React from 'react';
import {StatePropsType, UserType} from '../../../../redux/reduxStore/reduxStore';
import {connect} from 'react-redux';
import {
    followUser,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollowUser
} from '../../../../redux/reducers/usersReducer/usersReducer';
import {Users} from './usersAPI/users/Users';
import {Preloader} from '../../../../commun/preloader/Preloader';
import {getUsers} from '../../../../api/api';


type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void

    setUsers: (users: Array<UserType>) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}


export class UsersAPI extends React.Component<PropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
    }

    onClickPageChange(currentPage: number) {
        this.props.setCurrentPage(currentPage);
        this.props.toggleIsFetching(true)

        getUsers(currentPage, this.props.pageSize)
            .then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalCount={this.props.totalCount}
                   currentPage={this.props.currentPage}
                   onClickPageChange={this.onClickPageChange.bind(this)}
                   followUser={this.props.followUser}
                   unfollowUser={this.props.unfollowUser}
            />
        </>

    }
}


const mapStateToProps = (state: StatePropsType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}


export const UsersContainer = connect(mapStateToProps,
    {
        setUsers,
        setTotalUsersCount,
        setCurrentPage,
        followUser,
        unfollowUser,
        toggleIsFetching,

    })(UsersAPI)


