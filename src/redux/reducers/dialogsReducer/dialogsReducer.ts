import {v1} from 'uuid';
import {ActionsType, DialogsPageType, MessageType} from '../../reduxStore/reduxStore';

//TYPES
export type SendMessageACType = {
    type: 'SEND-MESSAGE',
    newMessage: string
}


//ACTION CREATORS
export const addMessage = (newMessageBody: string): SendMessageACType => {
    return {type: 'SEND-MESSAGE', newMessage: newMessageBody}
}


//INITIAL STATE
let initialState = {
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


//REDUCER
export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            let newMessageBody: MessageType = {
                id: v1(),
                message: action.newMessage
            }
            return {
                ...state,
                messages: [newMessageBody, ...state.messages]
            }
        }
        default:
            return state
    }
}

