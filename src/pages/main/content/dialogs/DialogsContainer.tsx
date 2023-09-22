import React from 'react';
import {addMessage} from '../../../../redux/reducers/dialogsReducer/dialogsReducer';
import {DialogsPageType, DispatchType, StatePropsType} from '../../../../redux/reduxStore/reduxStore';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {WithAuthRedirect} from '../../../../hoc/WithAuthRedirect';
import {compose} from 'redux';


type MapDispatchToPropsType = {
    sendMessage: (newMessage: string) => void
}


let mapStateToProps = (state: StatePropsType): DialogsPageType => {
    return {
        dialogNames: state.dialogsPage.dialogNames,
        messages: state.dialogsPage.messages,
    }
}

let mapDispatchToProps = (dispatch: DispatchType): MapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(addMessage(newMessageBody))
        }
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect,

)(Dialogs)