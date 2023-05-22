import {v1} from 'uuid';
import {ActionsType, ProfilePageType} from '../../reduxStore/reduxStore';


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


export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {



    return state
}