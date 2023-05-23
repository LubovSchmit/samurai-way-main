import React from 'react';
import style from './Friend.module.scss';


type PropsType = {
    id: string
    friendName: string
    deleteFriend: (id: string) => void
}

export const Friend = (props: PropsType) => {

    const onClickDeleteFriendButton = () =>{
        props.deleteFriend(props.id)
    }


    return (
        <div className={style.friendContainer}>

            {props.friendName}
            <button className={style.buttonFriendDelete}
                    onClick={onClickDeleteFriendButton}>x</button>
        </div>

    )
};
