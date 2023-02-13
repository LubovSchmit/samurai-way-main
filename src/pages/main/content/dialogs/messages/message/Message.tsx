import React from 'react';
import style from './Message.module.scss';


type PropsType = {
    message: string,
    id: string
}

export const Message = (props: PropsType) => {
    return (
        <div className={style.messageContainer}>

            <div className={style.message}>
                {props.message}
            </div>

        </div>
    )
}