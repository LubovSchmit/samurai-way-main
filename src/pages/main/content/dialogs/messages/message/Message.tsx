import React from 'react';
import style from './Message.module.scss';


type MessagePropsType = {
    message: string
    id: string

}


export const Message = (props: MessagePropsType) => {
    return (
        <div className={style.messageContainer}>

            <div className={style.message}>
                {props.message}
            </div>

        </div>
    )
}