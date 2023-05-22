import React from 'react';
import {addMessageAC} from '../../../../redux/reducers/dialogsReducer/dialogsReducer';
import {DispatchType, StatePropsType} from '../../../../redux/reduxStore/reduxStore';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';


/*type PropsType = {
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
};*/


let mapStateToProps = (state: StatePropsType) => {
    return {
        dialogNames: state.dialogsPage.dialogNames,
        messages: state.dialogsPage.messages
    }
}

let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        sendMessage: (newMessage: string)=> {
            dispatch(addMessageAC(newMessage))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)