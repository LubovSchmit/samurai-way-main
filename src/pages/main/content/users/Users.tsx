import React from 'react';
import style from './Users.module.scss'
import {UserType} from '../../../../redux/reduxStore/reduxStore';
import {User} from './user/User';


type PropsType = {
    users: Array<UserType>
    setUsers: (users: Array<UserType>) => void
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void

}


export const Users = (props: PropsType) => {


    return (
        <div className={style.usersContainer}>
            {props.users.map(u =>
                <User key={u.userId}
                      userId={u.userId}
                      photoURL={u.photoURL}
                      fullName={u.fullName}
                      status={u.status}
                      followed={u.followed}
                      location={u.location}
                      followUser={props.followUser}
                      unfollowUser={props.unfollowUser}/>
            )}
        </div>
    )
}