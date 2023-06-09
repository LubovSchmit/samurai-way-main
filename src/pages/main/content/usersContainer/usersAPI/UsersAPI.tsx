import React from 'react';
import {UserType} from '../../../../../redux/reduxStore/reduxStore';
import axios from 'axios';
import {Users} from './users/Users'


type PropsType = {
    users: Array<UserType>
    pageSize: number,
    totalCount: number,
    currentPage: number
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void

    setUsers: (users: Array<UserType>) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void,

}


export class UsersAPI extends React.Component<PropsType, Array<UserType>> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }
    onClickPageChange(p: number) {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <Users users={this.props.users}
                      pageSize={this.props.pageSize}
                      totalCount={this.props.totalCount}
                      currentPage={this.props.currentPage}
                      onClickPageChange={this.onClickPageChange}
                      followUser={this.props.followUser}
                      unfollowUser={this.props.unfollowUser}
        />
    }
}
