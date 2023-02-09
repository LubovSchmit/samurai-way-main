import React from 'react';
import style from './Dialogs.module.scss';
import {DialogsItems} from './dialogs-items/DialogsItems';
import {Messages} from './messages/Messages';


export const Dialogs = () => {
    return (
        <div className={style.dialogsContainer}>

            <div className={style.dialogItemsBlock}>
                <DialogsItems/>
            </div>

            <div className={style.messagesBlock}>
                <Messages/>
            </div>

        </div>
    )
};