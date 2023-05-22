import React from 'react';
import {addMessageAC} from '../../../../redux/reducers/dialogsReducer/dialogsReducer';
import {ActionsType, DialogNameType, MessagePropsType} from '../../../../redux/reduxStore/reduxStore';
import {Dialogs} from './Dialogs';


type PropsType = {
    dialogNames: Array<DialogNameType>,
    messages: Array<MessagePropsType>,
    dispatch: (action: ActionsType) => void
}

export const DialogsContainer = (props: PropsType) => {

    const sendMessage = (newMessage: string) => {
        props.dispatch(addMessageAC(newMessage))
    }

    return <Dialogs dialogNames={props.dialogNames}
                    messages={props.messages}
                    sendMessage={sendMessage}/>
};
