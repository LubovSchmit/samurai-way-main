import {ActionsType, ProfilePageType, ProfileType} from '../../reduxStore/reduxStore';
import myPhoto from '../../../assets/images/ava.jpg'

export type SetUserProfileACType = {
    type: 'SET-USER-PROFILE',
    profile: ProfileType
}


let initialState: ProfilePageType = {
    profile: {
        aboutMe: 'Hi',
        contacts: {
            facebook: 'facebook.com',
            website: null,
            vk: 'vk.com',
            twitter: 'twitter.com',
            instagram: 'instagram.com',
            youtube: 'youtube.com',
            github: 'github.com',
            mainLink: null,
        },
        lookingForAJob: false,
        LookingForAJobDescription: null,
        fullName: 'Luba',
        userId: '1',
        photos: {
            small: myPhoto,
            large: myPhoto
        }
    },
}


export const setUserProfile = (profile: ProfileType): SetUserProfileACType => {
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