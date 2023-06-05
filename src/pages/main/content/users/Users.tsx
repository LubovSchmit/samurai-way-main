import React from 'react';
import style from './Users.module.scss'
import {UserType} from '../../../../redux/reduxStore/reduxStore';
import {User} from './user/User';
import axios from 'axios';


type PropsType = {
    users: Array<UserType>
    setUsers: (users: Array<UserType>) => void
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
}


export class Users extends React.Component<PropsType, Array<UserType>> {


    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div className={style.usersContainer}>

                {this.props.users.map(u =>
                    <User key={u.id}
                          id={u.id}
                          photoSmall={u.photos.small}
                          name={u.name}
                          status={u.status}
                          followed={u.followed}
                          followUser={this.props.followUser}
                          unfollowUser={this.props.unfollowUser}/>
                )}
            </div>
        )
    }
}
