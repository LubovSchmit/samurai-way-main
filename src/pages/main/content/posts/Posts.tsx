import React, {useState} from 'react';
import style from './Posts.module.scss';
import {PostType} from '../../../../redux/state';
import {Post} from './post/Post';


type PropsType = {
    posts: Array<PostType>,
    addPost: (message: string) => void

}

export const Posts = (props: PropsType) => {


    let postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)


    const addPostMessageHandler = () => {
        props.addPost('Hi')
    }


    return (
        <div className={style.postsContainer}>

            <div className={style.textareaButtonContainer}>
                <textarea className={style.textarea}></textarea>
                <button className={style.button} onClick={addPostMessageHandler}
                >Add post
                </button>
            </div>

            <div className={style.posts}>
                <div className={style.item}>
                    {postsElements}
                </div>
            </div>

        </div>
    )
};
