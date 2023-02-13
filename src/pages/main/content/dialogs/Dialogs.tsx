import React from 'react';
import style from './Dialogs.module.scss';
import {DialogsItems} from './dialogs-items/DialogsItems';
import {Messages} from './messages/Messages';
import {DialogNameType, MessagePropsType} from '../../../../redux/state';




type PropsType ={
    dialogNames: Array<DialogNameType>,
    messages: Array<MessagePropsType>
}

export const Dialogs = (props: PropsType) => {
    return (
        <div className={style.dialogsContainer}>

            <div className={style.dialogItemsBlock}>
                <DialogsItems dialogNames={props.dialogNames}/>
            </div>

            <div className={style.messagesBlock}>
                <Messages messages={props.messages}/>
            </div>

        </div>
    )
};