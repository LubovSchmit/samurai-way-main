import {ActionsType, DispatchType, PhotosType, ProfilePageType, ProfileType} from '../../reduxStore/reduxStore';
import myPhoto from '../../../assets/images/ava.jpg'
import {profileAPI} from '../../../api/api';

export type SetUserProfileACType = {
    type: 'SET-USER-PROFILE',
    profile: ProfileType
}
export type SetUserStatusACType = {
    type: 'SET-USER-STATUS',
    status: string
}



let initialState: ProfilePageType = {
    profile: {
        userId: '17358',
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: 'Luba',
        contacts: {
            github: 'github.com',
            vk: 'vk.com',
            facebook: 'facebook.com',
            instagram: 'instagram.com',
            twitter: 'twitter.com',
            website: null,
            youtube: 'youtube.com',
            mainLink: null,
        },
        photos: {
            small: null,
            large: null
        }
    },
    status: '',

}


export const setUserProfile = (profile: ProfileType): SetUserProfileACType => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    }
}
export const setUserStatus = (status: string): SetUserStatusACType => {
    return {
        type: 'SET-USER-STATUS',
        status
    }
}


export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'SET-USER-STATUS': {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}


export const getProfile = (userId: string) => {
    return (dispatch: DispatchType) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}
export const getStatus = (userId: string) => {
    return (dispatch: DispatchType) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setUserStatus(data))
            })
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: DispatchType) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            })
    }
}
