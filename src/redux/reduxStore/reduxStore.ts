import {applyMiddleware, combineReducers, createStore} from 'redux';
import {AddPostACType, postsReducer} from '../reducers/postsReducer/postsReducer';
import {AddNewMessageACType, dialogsReducer} from '../reducers/dialogsReducer/dialogsReducer';
import {profileReducer, SetUserProfileACType} from '../reducers/profileReducer/profileReducer';
import {
    FollowUserACType,
    SetCurrentPageACType,
    SetTotalUsersCountACType,
    SetUsersACType, ToggleInProgressACType,
    ToggleIsFetchingACType,
    UnfollowUserACType,
    usersReducer
} from '../reducers/usersReducer/usersReducer';
import {authReducer, AuthUserACType} from '../reducers/authReducer/authReducer';
import thunkMiddleware from 'redux-thunk';

export type ActionsType =
    AddPostACType |
    AddNewMessageACType |
    FollowUserACType |
    UnfollowUserACType |
    SetUsersACType |
    SetCurrentPageACType |
    SetTotalUsersCountACType |
    ToggleIsFetchingACType |
    SetUserProfileACType |
    AuthUserACType |
    ToggleInProgressACType


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
    postText: string
    likesCount: number
}
export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null,
    },
    lookingForAJob: boolean,
    LookingForAJobDescription: string | null,
    fullName: string,
    userId: string,
    photos: {
        small: string,
        large: string
    }
}
export type UserDataType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean

}


export type ProfilePageType = {
    profile: ProfileType,
}
export type PostsPageType = {
    newPostText: string
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


/*export type StatePropsType = {
    profilePage: ProfilePageType
    postsPage: PostsPageType
    dialogsPage: DialogsPageType
    usersPage: UsersPageType
    auth: AuthType
}*/
export type DispatchType = (action: ActionsType, anyArgument?: any) => void

type ReducersType = typeof rootReducer
export type StatePropsType = ReturnType<ReducersType>


let rootReducer = combineReducers({
    postsPage: postsReducer,
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store
