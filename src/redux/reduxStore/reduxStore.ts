import {applyMiddleware, combineReducers, createStore} from 'redux';
import {AddPostACType, postsReducer} from '../reducers/postsReducer/postsReducer';
import {dialogsReducer, SendMessageACType} from '../reducers/dialogsReducer/dialogsReducer';
import {profileReducer, SetUserProfileACType, SetUserStatusACType,} from '../reducers/profileReducer/profileReducer';
import {
    FollowUserACType,
    SetCurrentPageACType,
    SetTotalUsersCountACType,
    SetUsersACType,
    ToggleInProgressACType,
    ToggleIsFetchingACType,
    UnfollowUserACType,
    usersReducer
} from '../reducers/usersReducer/usersReducer';
import {authReducer, AuthUserACType} from '../reducers/authReducer/authReducer';
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {AppAuthACType, appReducer} from '../reducers/appReducer/appReducer';


export type PhotosType = {
    small: string | null,
    large: string | null
}
export type UserType = {
    id: string
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}
export type DialogNameType = {
    name: string
    id: string
}
export type MessageType = {
    id: string
    message: string
}
export type PostType = {
    userId: string
    newPostText: string
    likesCount: number
}
export type ProfileType = {
    userId: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    contacts: {
        github: string | null,
        vk: string | null,
        facebook: string | null,
        instagram: string | null,
        twitter: string | null,
        website: string | null,
        youtube: string | null,
        mainLink: string | null,
    },
    photos: PhotosType

}
export type UserDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean

}


export type ProfilePageType = {
    profile: ProfileType,
    status: string,

}
export type PostsPageType = {
    newPostText?: string
    posts: Array<PostType>
}
export type DialogsPageType = {
    dialogNames: Array<DialogNameType>
    messages: Array<MessageType>
    newMessage?: string
}
export type UsersPageType = {
    users: Array<UserType>,
    pageSize: number,
    totalCount: number,
    currentPage: number,
    isFetching: boolean,
    inProgress: Array<string>,
}
export type AuthType = {
    data: UserDataType,
    isFetching: boolean
}
export type AppAuthType = {
    initialised: boolean
}


export type ActionsType =
    AppAuthACType|
    AddPostACType |
    SendMessageACType |
    FollowUserACType |
    UnfollowUserACType |
    SetUsersACType |
    SetCurrentPageACType |
    SetTotalUsersCountACType |
    ToggleIsFetchingACType |
    SetUserProfileACType |
    SetUserStatusACType |
    AuthUserACType |
    ToggleInProgressACType



export type StatePropsType = ReturnType<typeof store.getState>
export type DispatchType = ThunkDispatch<StatePropsType, void, ActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StatePropsType, unknown, ActionsType>


let rootReducer = combineReducers({
    app: appReducer,
    postsPage: postsReducer,
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
})

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store
