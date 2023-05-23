import React from 'react';
import style from './Friends.module.scss';
import {Friend} from './friend/Friend';
import {FriendType} from '../../../../../redux/reduxStore/reduxStore';


type PropsType = {
    friends: Array<FriendType>
    deleteFriend: (id: string)=> void
}

export const Friends = (props: PropsType) => {

    let friendsElements = props.friends
        .map(f => <Friend key={f.id}
                          id={f.id}
                          friendName={f.friendName}
                          deleteFriend={props.deleteFriend}/>)

    return (
        <div className={style.friendsContainer}>

            <div className={style.titleFriends}>
                FRIENDS
            </div>

            <div className={style.friendsBlock}>
                {friendsElements}
            </div>

        </div>

    )
}