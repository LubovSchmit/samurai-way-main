import React from 'react';
import style from './Messages.module.scss';
import {Message} from './message/Message';
import {MessageType} from '../../../../../redux/reduxStore/reduxStore';



type PropsType = {
    messages: Array<MessageType>,
}

export const Messages = (props: PropsType) => {


    let messagesElements = props.messages
        .map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    return (
        <div className={style.messagesContainer}>
            {messagesElements}
        </div>
    )
};