import {combineReducers, createStore} from 'redux';
import {AddPostACType, postsReducer} from '../reducers/postsReducer/postsReducer';
import {AddNewMessageACType, dialogsReducer} from '../reducers/dialogsReducer/dialogsReducer';
import {profileReducer} from '../reducers/profileReducer/profileReducer';

export type ActionsType = AddPostACType | AddNewMessageACType

export type FriendType = {
    id: string
    friendName: string
}
export type DialogNameType = {
    name: string
    id: string
}
export type MessagePropsType = {
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
    messages: Array<MessagePropsType>
    newMessage: string
}

export type StatePropsType = {
    profilePage: ProfilePageType
    postsPage: PostsPageType
    dialogsPage: DialogsPageType
}

export type DispatchType = (action: ActionsType, anyArgument?: any)=> void


let reducers = combineReducers({
    postsPage: postsReducer,
    dialogsPage : dialogsReducer,
    profilePage: profileReducer
})

export let store = createStore(reducers);