import React from 'react';
import style from './Friend.module.scss';







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
