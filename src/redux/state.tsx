import React from 'react';
import {v1} from 'uuid';




export type DialogNameType = {
    name: string
    id: string
}
export type MessagePropsType = {
    message: string
    id: string

}
export type PostType = {
    id: string
    message: string
    likesCount: number
}


export type postsPageType = {
    newPostMessage: string
    posts: Array<PostType>
}

export type dialogsPage = {
    dialogNames: Array<DialogNameType>,
    messages: Array<MessagePropsType>,
}

export type StatePropsType = {
    postsPage: postsPageType,
    dialogsPage: dialogsPage
}


let state: StatePropsType = {
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

}

let rerenderEntireTree = () => {

}

export const addPost = (message: string) => {
    debugger
    let newPost: PostType = {id: v1(), message: message, likesCount: 0}
  /*  let newPosts = [newPost, ...state.postsPage.posts]*/
    state.postsPage.posts.push(newPost)

    rerenderEntireTree()
}

export const subscribe = (observer: ()=> void) => {
    rerenderEntireTree = observer
}


export default state;


