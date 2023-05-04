import React from 'react';
import style from './Friends.module.scss';
import {FriendType} from '../../../../../redux/state';
import {Friend} from './friend/Friend';


type PropsType = {
    friends: Array<FriendType>
}

export const Friends = (props: PropsType) => {

    let friendsElements = props.friends
        .map(f => <Friend key={f.id} id={f.id} friendName={f.friendName}/>)

    return (
        <div className={style.friendsContainer}>

            <div className={style.titleFriends}>FRIENDS</div>
            <div className={style.friendsBlock}>
                {friendsElements}
            </div>

        </div>

    )
}