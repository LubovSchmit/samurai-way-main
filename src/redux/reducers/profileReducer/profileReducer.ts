import {v1} from 'uuid';
import {ActionsType, ProfilePageType} from '../../reduxStore/reduxStore';

export type DeleteFriendACType = {
    type: 'DELETE-FRIEND',
    id: string
}


let initialState = {
    friends: [
        {
            id: v1(),
            friendName: 'Nataliya'
        },
        {
            id: v1(),
            friendName: 'Veronika'
        },
        {
            id: v1(),
            friendName: 'Max'
        }
    ]
}

export const deleteFriend = (id: string): DeleteFriendACType => {
    return {
        type: 'DELETE-FRIEND',
        id: id
    }
}


export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case 'DELETE-FRIEND': {
            return {...state, friends: state.friends.filter(f => f.id !== action.id)}
        }

        default:
            return state
    }
}