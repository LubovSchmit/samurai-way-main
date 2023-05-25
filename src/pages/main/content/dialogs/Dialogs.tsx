import React, {ChangeEvent, useState} from 'react';
import style from './Dialogs.module.scss';
import {DialogsItems} from './dialogs-items/DialogsItems';
import {Messages} from './messages/Messages';
import {DialogNameType, MessageType} from '../../../../redux/reduxStore/reduxStore';


type PropsType = {
    dialogNames: Array<DialogNameType>,
    messages: Array<MessageType>,
    sendMessage: (newMessage: string) => void,
}

export const Dialogs = (props: PropsType) => {
    let [newMessage, setNewMessage] = useState<string>('')

    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessage(e.currentTarget.value)
    }

    const onSendMessageClick = () => {
        if (newMessage.trim() === '') return
        props.sendMessage(newMessage)
        setNewMessage('')
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
                <div>
                    <textarea className={style.textarea}
                              placeholder={'Enter your message'}
                              value={newMessage}
                              onChange={onChangeTextareaHandler}
                    >''</textarea>
                </div>

                <div>
                    <button onClick={onSendMessageClick}>
                        Send message
                    </button>
                </div>
            </div>

        </div>
    )
};