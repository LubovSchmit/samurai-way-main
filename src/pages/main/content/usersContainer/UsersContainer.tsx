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
import React from 'react';
import axios from 'axios';
import {Users} from './usersAPI/users/Users';
import {Preloader} from '../../../../commun/preloader/Preloader';


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
    toggleIsFetching: (isFetching: boolean)=> void

}

/*export type UsersProps = ReturnType<typeof mapStateToProps> */

export class UsersAPI extends React.Component<PropsType, Array<UserType>> {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onClickPageChange(p: number) {
        this.props.setCurrentPage(p);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
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
/*const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users)),
        setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCountAC(totalCount)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
        followUser: (userId: string) => dispatch(followUserAC(userId)),
        unfollowUser: (userId: string) => dispatch(unfollowUserAC(userId)),
        toggleIsFetching: (isFetching: boolean) => dispatch(toggleIsFetchingAC(isFetching))
    }
}*/

export const UsersContainer = connect(mapStateToProps,
    {
        setUsers,
        setTotalUsersCount,
        setCurrentPage,
        followUser,
        unfollowUser,
        toggleIsFetching,

    })(UsersAPI)


