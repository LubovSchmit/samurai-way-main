import React from 'react';
import style from './Users.module.scss'
import {UserType} from '../../../../../../redux/reduxStore/reduxStore';
import {User} from './user/User';
import {Paginator} from '../../../../../../commun/pagination/Paginator';


type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    inProgress: Array<string>
    onClickPageChange: (p: number) => void
    follow: (userId: string) => void
    unfollow: (userId: string) => void

}


export const Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages: Array<number> = [];
    for (let i: number = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={style.usersContainer}>

        <Paginator pageSize={props.pageSize}
                   totalCount={props.totalCount}
                   currentPage={props.currentPage}
                   onClickPageChange={props.onClickPageChange}
        />


        {props.users.map(u =>
            <User key={u.id}
                  userId={u.id}
                  photoSmall={u.photos.small}
                  name={u.name}
                  status={u.status}
                  followed={u.followed}
                  inProgress={props.inProgress}
                  follow={props.follow}
                  unfollow={props.unfollow}

            />
        )}
    </div>

}
