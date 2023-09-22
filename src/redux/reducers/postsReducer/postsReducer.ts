import {v1} from 'uuid';
import {ActionsType, PostsPageType, PostType} from '../../reduxStore/reduxStore';


export type AddPostACType = {
    type: 'ADD-POST',
    newPostText: string
}
export type DeletePostACType = {
    type: 'DELETE-POST',
    userId: string
}

let initialState: PostsPageType = {
    posts: [
        {
            userId: v1(),
            newPostText: 'Le premier exemple de ce livre affiche hello, world (sans majuscule ni point final, mais avec une virgule et un retour à la ligne terminal). Le premier hello world dont Kernighan et Ritchie se souviennent provient d’un manuel d’apprentissage du langage B écrit par Kernighan',
            likesCount: 23
        },

        {
            userId: v1(),
            newPostText: '« Hello world » (traduit littéralement en français par « Bonjour le monde ») sont les mots traditionnellement écrits par un programme informatique simple dont le but est de faire la démonstration rapide de son exécution sans erreur.',
            likesCount: 185
        },

        {
            userId: v1(),
            newPostText: 'De manière plus large, c\'est le programme le plus simple qu\'on essaie de faire fonctionner lorsqu\'on apprend un nouveau langage de programmation (par exemple à but pédagogique), mais aussi lorsqu\'on met au point ou qu\'on met en œuvre des composants logiciels dans une situation donnée.',
            likesCount: 68
        },

    ],

}

export const addPost = (newPostText: string): AddPostACType => {
    return {type: 'ADD-POST', newPostText}
}
export const deletePost = (userId: string): DeletePostACType => {
    return {type: 'DELETE-POST', userId}
}


export const postsReducer = (state: PostsPageType = initialState, action: ActionsType): PostsPageType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost: PostType = {
                userId: v1(),
                newPostText: action.newPostText,
                likesCount: 0
            }

            return {...state, posts: [newPost, ...state.posts]}
        }


        case 'DELETE-POST': {
            return {...state, posts: state.posts.filter(p => p.userId!= action.userId)}
        }


        default:
            return state
    }

}


