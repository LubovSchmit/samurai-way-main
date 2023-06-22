import {v1} from 'uuid';
import {ActionsType, PostsPageType, PostType} from '../../reduxStore/reduxStore';


export type AddPostACType = {
    type: 'ADD-POST',
    postText: string
}

let initialState: PostsPageType = {
    newPostText: '',
    posts: [
        {
            userId: v1(),
            postText: 'Le premier exemple de ce livre affiche hello, world (sans majuscule ni point final, mais avec une virgule et un retour à la ligne terminal). Le premier hello world dont Kernighan et Ritchie se souviennent provient d’un manuel d’apprentissage du langage B écrit par Kernighan',
            likesCount: 23
        },

        {
            userId: v1(),
            postText: '« Hello world » (traduit littéralement en français par « Bonjour le monde ») sont les mots traditionnellement écrits par un programme informatique simple dont le but est de faire la démonstration rapide de son exécution sans erreur.',
            likesCount: 185
        },

        {
            userId: v1(),
            postText: 'De manière plus large, c\'est le programme le plus simple qu\'on essaie de faire fonctionner lorsqu\'on apprend un nouveau langage de programmation (par exemple à but pédagogique), mais aussi lorsqu\'on met au point ou qu\'on met en œuvre des composants logiciels dans une situation donnée.',
            likesCount: 68
        },

    ],

}

export const addPost = (newPostMessage: string): AddPostACType => {
    return {type: 'ADD-POST', postText: newPostMessage}
}


export const postsReducer = (state: PostsPageType = initialState, action: ActionsType): PostsPageType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost: PostType = {
                userId: v1(),
                postText: action.postText,
                likesCount: 0
            }
          /*  state.newPostText = action.postText*/


            return {...state, newPostText: '', posts: [newPost, ...state.posts]}
        }


        default:
            return state
    }

}


