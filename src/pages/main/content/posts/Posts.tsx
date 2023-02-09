import React from 'react';
import style from './Posts.module.scss';
import {Post} from './post/Post';
import {v1} from 'uuid';


export const Posts = () => {

    let posts = [
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

    ]

    let postsElements = posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={style.postsContainer}>

            <div className={style.textareaButtonContainer}>
                <textarea className={style.textarea}></textarea>
                <button className={style.button}>Add post</button>
            </div>

            <div className={style.posts}>
                <div className={style.item}>
                    {postsElements}
                </div>
            </div>

        </div>
    )
};
