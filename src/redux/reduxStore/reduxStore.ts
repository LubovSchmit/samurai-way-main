import {combineReducers, createStore} from 'redux';
import {AddPostACType, postsReducer} from '../reducers/postsReducer/postsReducer';
import {AddNewMessageACType, dialogsReducer} from '../reducers/dialogsReducer/dialogsReducer';
import {DeleteFriendACType, profileReducer} from '../reducers/profileReducer/profileReducer';
import {
    FollowUserACType,
    SetCurrentPageACType,
    SetTotalUsersCountACType,
    SetUsersACType, ToggleIsFetchingACType,
    UnfollowUserACType,
    usersReducer
} from '../reducers/usersReducer/usersReducer';

export type ActionsType =
    AddPostACType |
    AddNewMessageACType |
    DeleteFriendACType |
    FollowUserACType |
    UnfollowUserACType |
    SetUsersACType |
    SetCurrentPageACType |
    SetTotalUsersCountACType |
    ToggleIsFetchingACType

export type FriendType = {
    id: string
    friendName: string
}
export type UserType = {
    id: string
    photos: {
        small: string
        large: string
    }
    name: string
    status: string
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
    id: string
    postText: string
    likesCount: number
}

export type ProfilePageType = {
    friends: Array<FriendType>
}
export type PostsPageType = {
    newPostText: string
    posts: Array<PostType>
}
export type DialogsPageType = {
    dialogNames: Array<DialogNameType>
    messages: Array<MessageType>
    newMessage: string
}
export type UsersPageType = {
    users: Array<UserType>,
    pageSize: number,
    totalCount: number,
    currentPage: number,
    isFetching: boolean,
}

export type StatePropsType = {
    profilePage: ProfilePageType
    postsPage: PostsPageType
    dialogsPage: DialogsPageType
    usersPage: UsersPageType
}
export type DispatchType = (action: ActionsType, anyArgument?: any) => void


let reducers = combineReducers({
    postsPage: postsReducer,
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
})

export let store = createStore(reducers);

// @ts-ignore
window.store = store
