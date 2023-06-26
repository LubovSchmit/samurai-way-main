import React from 'react';
import {StatePropsType} from '../../../../redux/reduxStore/reduxStore';
import {connect} from 'react-redux';
import {
    followUser, getUsers,
    setCurrentPage,
    toggleInProgress,
    unfollowUser
} from '../../../../redux/reducers/usersReducer/usersReducer';
import {Users} from './usersAPI/users/Users';
import {Preloader} from '../../../../commun/preloader/Preloader';


type MapDispatchToPropsType = {
    setCurrentPage: (currentPage: number) => void
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
    toggleInProgress: (isFetching: boolean, userId: string) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
type PropsType = ReturnType<typeof mapStateToProps> & MapDispatchToPropsType

export class UsersAPI extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onClickPageChange(currentPage: number) {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)

        this.props.setCurrentPage(currentPage);

        /* this.props.toggleIsFetching(true)
         usersAPI.getUsers(currentPage, this.props.pageSize)
             .then(data => {
                 this.props.toggleIsFetching(false)
                 this.props.setUsers(data.items)
             })*/
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalCount={this.props.totalCount}
                   currentPage={this.props.currentPage}
                   inProgress={this.props.inProgress}
                   onClickPageChange={this.onClickPageChange.bind(this)}
                   followUser={this.props.followUser}
                   unfollowUser={this.props.unfollowUser}
                   toggleInProgress={this.props.toggleInProgress}
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
        inProgress: state.usersPage.inProgress
    }
}


export const UsersContainer = connect(mapStateToProps,
    {
        setCurrentPage,
        followUser,
        unfollowUser,
        toggleInProgress,

        getUsers,

    })(UsersAPI)


