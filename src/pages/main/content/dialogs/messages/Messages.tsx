import React from 'react';
import style from './Messages.module.scss';
import {Message} from './message/Message';
import {v1} from 'uuid';


export const Messages = () => {

    let messages = [
        {id: v1(), message: 'Je veux faire dodooooo...'},
        {id: v1(), message: 'Non! Je veux pas!'},
        {id: v1(), message: 'Il est ou mon portable??'},
        {id: v1(), message: 'Jules, tu es ou?'},
        {id: v1(), message: 'Coucou tout le monde! A quelle heure on va manger?'}
    ]

    let messagesElements = messages.map(m=><Message key={m.id} message={m.message} id={m.id}/>)

    return (
        <div className={style.messagesContainer}>
            {messagesElements}
        </div>
    )
};