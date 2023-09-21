import {ActionsType, DispatchType, ProfilePageType, ProfileType} from '../../reduxStore/reduxStore';
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
        userId: '',
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: 'Luba',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: null,
            youtube: '',
            mainLink: null,
        },
        photos: {
            small: null,
            large: null
        }
    },
    status: 'There are no status',

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
