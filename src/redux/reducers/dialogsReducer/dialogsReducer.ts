import {v1} from 'uuid';
import {ActionsType, DialogsPageType, MessagePropsType} from '../../reduxStore/reduxStore';


export type AddNewMessageACType = {
    type: 'ADD-NEW-MESSAGE',
    dialogMessage: string
}


let initialState = {
    newMessage: '',
    dialogNames: [
        {id: v1(), name: 'Luba'},
        {id: v1(), name: 'Leon'},
        {id: v1(), name: 'Pierre'},
        {id: v1(), name: 'Mira'},
        {id: v1(), name: 'Familichka'}
    ],
    messages: [
        {id: v1(), message: 'Je veux faire dodooooo...'},
        {id: v1(), message: 'Nan!!!! Je veux pas!'},
        {id: v1(), message: 'Il est ou mon portable??'},
        {id: v1(), message: 'Jules, tu es ou?'},
        {id: v1(), message: 'Coucou tout le monde! A quelle heure on va manger?'}
    ],
}


export const addMessageAC = (newDialogMessage: string): AddNewMessageACType => {
    return {type: 'ADD-NEW-MESSAGE', dialogMessage: newDialogMessage}
}


export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {
    switch (action.type) {

        case 'ADD-NEW-MESSAGE': {
            let newDialogMessage: MessagePropsType = {
                id: v1(),
                message: action.dialogMessage
            }

            state.newMessage = ''
            return {...state, messages: [newDialogMessage, ...state.messages]}
        }

        default:
            return state
    }
}

