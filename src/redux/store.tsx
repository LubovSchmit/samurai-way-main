import React from 'react';
import {v1} from 'uuid';
import {AddPostACType, postsReducer} from './reducers/postsReducer/postsReducer';
import {AddNewMessageACType, dialogsReducer} from './reducers/dialogsReducer/dialogsReducer';
import {profileReducer} from './reducers/profileReducer/profileReducer';

/*
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
*/


/*
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
            newMessage: '',
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
    },
    _callSubscriber(_state: StatePropsType) {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer: (_state: StatePropsType) => void) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionsType) {

        this._state.postsPage = postsReducer(this._state.postsPage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)

        this._callSubscriber(this._state)


    }
}
*/


/*export default store;*/
