import React from 'react';
import style from './Friend.module.scss';
import {FriendType} from '../../../../../../redux/state';






type PropsType = {
    id: string
    friendName: string
}

export const Friend = (props: PropsType) => {
    return (
        <div className={style.friendContainer}>

            {props.friendName}
        </div>
    )
};
