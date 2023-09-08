import React from 'react';
import style from './Dialogs.module.scss';
import {DialogsItems} from './dialogs-items/DialogsItems';
import {Messages} from './messages/Messages';
import {DialogNameType, MessageType} from '../../../../redux/reduxStore/reduxStore';
import {AddMessageReduxForm} from './AddNewPostReduxForm';



type PropsType = {
    dialogNames: Array<DialogNameType>,
    messages: Array<MessageType>,
    sendMessage: (newMessage: string) => void,
    isAuth: boolean
}

export const Dialogs = (props: PropsType) => {
    const onSubmit = (formData: any) => {
        if (formData.newMessageBody.trim() === '') return
        props.sendMessage(formData.newMessageBody)


    }


    return (
        <div className={style.dialogsContainer}>

            <div className={style.dialogItemsBlock}>
                <DialogsItems dialogNames={props.dialogNames}/>
            </div>
            <div className={style.messagesBlock}>
                <Messages messages={props.messages}/>
            </div>
            <div className={style.nexMessageTextareaBlock}>
                <AddMessageReduxForm onSubmit={onSubmit}/>

            </div>

        </div>
    )
};

