import React from 'react';
import style from './Messages.module.scss';
import {Message} from './message/Message';
import {MessagePropsType} from '../../../../../redux/state';




type PropsType = {
    messages: Array<MessagePropsType>,
}

export const Messages = (props: PropsType) => {


    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    return (
        <div className={style.messagesContainer}>
            {messagesElements}
        </div>
    )
};