import React from 'react';
import style from './Users.module.scss'
import {UserType} from '../../../../../../redux/reduxStore/reduxStore';
import {User} from './user/User';


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

        <div className={style.pageNumberContainer}>
            {pages.map(p => {
                return <span key={p}
                             className={props.currentPage === p ? style.selectedPage : style.nonSelectedPage}
                             onClick={(e) => {
                                 props.onClickPageChange(p)
                             }}>
                            {p}
                        </span>
            })}
        </div>


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
