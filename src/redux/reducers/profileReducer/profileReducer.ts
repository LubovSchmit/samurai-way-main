import {ActionsType, DispatchType, PhotosType, ProfilePageType, ProfileType} from '../../reduxStore/reduxStore';
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

export type SavePhotoSuccessACType = {
    type: 'SAVE-PHOTO',
    photos: PhotosType
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
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessACType => {
    return {
        type: 'SAVE-PHOTO',
        photos
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
        case 'SAVE-PHOTO': {
            return {...state, profile: {...state.profile, photos: action.photos}}
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
export const savePhoto = (file: File)=> async (dispatch: DispatchType)=> {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos))
    }
}
