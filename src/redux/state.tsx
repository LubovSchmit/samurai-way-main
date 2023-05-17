import React from 'react';
import {v1} from 'uuid';


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

export type profilePageType = {
    friends: Array<FriendType>
}
export type postsPageType = {
    newPostText: string
    posts: Array<PostType>
}
export type dialogsPage = {
    dialogNames: Array<DialogNameType>
    messages: Array<MessagePropsType>
}

export type StatePropsType = {
    profilePage: profilePageType
    postsPage: postsPageType
    dialogsPage: dialogsPage

}


let store = {
    _state: {
        profilePage: {
            friends: [
                {
                    id: v1(),
                    friendName: 'Nataliya'
                },
                {
                    id: v1(),
                    friendName: 'Veronika'
                },
                {
                    id: v1(),
                    friendName: 'Max'
                }
            ]
        },

        postsPage: {

            newPostText: '',
            posts: [
                {
                    id: v1(),
                    postText: 'Le premier exemple de ce livre affiche hello, world (sans majuscule ni point final, mais avec une virgule et un retour à la ligne terminal). Le premier hello world dont Kernighan et Ritchie se souviennent provient d’un manuel d’apprentissage du langage B écrit par Kernighan',
                    likesCount: 23
                },

                {
                    id: v1(),
                    postText: '« Hello world » (traduit littéralement en français par « Bonjour le monde ») sont les mots traditionnellement écrits par un programme informatique simple dont le but est de faire la démonstration rapide de son exécution sans erreur.',
                    likesCount: 185
                },

                {
                    id: v1(),
                    postText: 'De manière plus large, c\'est le programme le plus simple qu\'on essaie de faire fonctionner lorsqu\'on apprend un nouveau langage de programmation (par exemple à but pédagogique), mais aussi lorsqu\'on met au point ou qu\'on met en œuvre des composants logiciels dans une situation donnée.',
                    likesCount: 68
                },

            ],

        },

        dialogsPage: {
            dialogNames: [
                {id: v1(), name: 'Luba'},
                {id: v1(), name: 'Leon'},
                {id: v1(), name: 'Pierre'},
                {id: v1(), name: 'Mira'},
                {id: v1(), name: 'Familichka'}
            ],
            messages: [
                {id: v1(), message: 'Je veux faire dodooooo...'},
                {id: v1(), message: 'Nan!!!! Je veux pas!'},
                {id: v1(), message: 'Il est ou mon portable??'},
                {id: v1(), message: 'Jules, tu es ou?'},
                {id: v1(), message: 'Coucou tout le monde! A quelle heure on va manger?'}
            ],
            newMessageDialogBody: ''

        },

    },
    _callSubscriber(_state: StatePropsType) {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer: (state: StatePropsType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionType) {
        if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: v1(),
                postText: action.postText,
                likesCount: 0
            }
            this._state.postsPage.newPostText = action.postText
            this._state.postsPage.posts.push(newPost)
            this._state.postsPage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            let newDialogMessage: MessagePropsType = {
                id: v1(),
                message: action.dialogMessageBody
            }
            this._state.dialogsPage.newMessageDialogBody = action.dialogMessageBody
            this._state.dialogsPage.messages.push(newDialogMessage)
            this._state.dialogsPage.newMessageDialogBody = ''
            this._callSubscriber(this._state)
        }
    }
}

export type ActionType = AddPostACType | UpdateNewMessageDialogBodyACType

type AddPostACType = {
    type: 'ADD-POST',
    postText: string
}
type UpdateNewMessageDialogBodyACType = {
    type: 'UPDATE-NEW-MESSAGE-BODY',
    dialogMessageBody: string
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

export const addPostAC = (newPostMessage: string): AddPostACType => {
    return {type: ADD_POST, postText: newPostMessage}
}
export const updateNewMessageDialogBodyAC = (newDialogBodyMessage: string): UpdateNewMessageDialogBodyACType => {
    return {type: UPDATE_NEW_MESSAGE_BODY, dialogMessageBody: newDialogBodyMessage}
}

export default store;
/*window.store = store;*/


/*let state: StatePropsType = {
    postsPage: {
        newPostMessage: '',
        posts: [
            {
                id: v1(),
                message: 'Le premier exemple de ce livre affiche hello, world (sans majuscule ni point final, mais avec une virgule et un retour à la ligne terminal). Le premier hello world dont Kernighan et Ritchie se souviennent provient d’un manuel d’apprentissage du langage B écrit par Kernighan',
                likesCount: 23
            },

            {
                id: v1(),
                message: '« Hello world » (traduit littéralement en français par « Bonjour le monde ») sont les mots traditionnellement écrits par un programme informatique simple dont le but est de faire la démonstration rapide de son exécution sans erreur.',
                likesCount: 185
            },

            {
                id: v1(),
                message: 'De manière plus large, c\'est le programme le plus simple qu\'on essaie de faire fonctionner lorsqu\'on apprend un nouveau langage de programmation (par exemple à but pédagogique), mais aussi lorsqu\'on met au point ou qu\'on met en œuvre des composants logiciels dans une situation donnée.',
                likesCount: 68
            },

        ],

    },
    dialogsPage: {
        dialogNames: [
            {id: v1(), name: 'Luba'},
            {id: v1(), name: 'Leon'},
            {id: v1(), name: 'Pierre'},
            {id: v1(), name: 'Mira'},
            {id: v1(), name: 'Familichka'}
        ],
        messages: [
            {id: v1(), message: 'Je veux faire dodooooo...'},
            {id: v1(), message: 'Nan!!!! Je veux pas!'},
            {id: v1(), message: 'Il est ou mon portable??'},
            {id: v1(), message: 'Jules, tu es ou?'},
            {id: v1(), message: 'Coucou tout le monde! A quelle heure on va manger?'}
        ],

    },

}*/

/*let rerenderEntireTree = (state: StatePropsType) => {
    console.log('State changed')
}*/

/*export const addPost = (message: string) => {
    let newPost: PostType = {id: v1(), message: message, likesCount: 0}

    state.postsPage.posts.push(newPost)

    rerenderEntireTree(state)
}*/

/*export const subscribe = (observer: (state: StatePropsType) => void) => {
    rerenderEntireTree = observer
}*/