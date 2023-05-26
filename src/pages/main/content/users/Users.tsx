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


export const Users = (props: PropsType) => {

    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger
            props.setUsers(response.data.items)
        })


    }

    return (
        <div className={style.usersContainer}>
            {props.users.map(u =>
                <User key={u.id}
                      id={u.id}
                      photoSmall={u.photos.small}
                      name={u.name}
                      status={u.status}
                      followed={u.followed}
                      followUser={props.followUser}
                      unfollowUser={props.unfollowUser}/>
            )}
        </div>
    )
}