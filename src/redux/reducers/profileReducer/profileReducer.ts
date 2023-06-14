import {ActionsType, ProfilePageType, ProfileType} from '../../reduxStore/reduxStore';


export type SetUserProfileACType = {
    type: 'SET-USER-PROFILE',
    profile: ProfileType | null
}


let initialState = {
    profile: null,
}


export const setUserProfile = (profile: ProfileType | null): SetUserProfileACType => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    }
}


export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}