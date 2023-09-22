import {ActionsType, DispatchType, ProfilePageType, ProfileType} from '../../reduxStore/reduxStore';
import {profileAPI} from '../../../api/api';


//TYPES
export type SetUserProfileACType = {
    type: 'SET-USER-PROFILE',
    profile: ProfileType
}
export type SetUserStatusACType = {
    type: 'SET-USER-STATUS',
    status: string
}


//ACTION CREATORS
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


//INITIAL STATE
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


//REDUCER
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


//THUNKS
export const getProfile = (userId: string) => async (dispatch: DispatchType) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}
export const getStatus = (userId: string) => async (dispatch: DispatchType) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(data))
}
export const updateStatus = (status: string) => async (dispatch: DispatchType) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}
