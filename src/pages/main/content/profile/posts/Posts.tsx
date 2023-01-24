import React from 'react';
import style from './Posts.module.scss';
import {Post} from './post/Post';




export const Posts = () => {
    return (
        <div className={style.postsContainer}>

            <div className={style.textareaButtonContainer}>
                <textarea className={style.textarea}></textarea>
                <button className={style.button}>Add post</button>
            </div>

            <div className={style.posts}>
                <div className={style.item}>
                    <Post message='props.message'/>
                </div>

                <div className={style.item}>
                    <Post message='props.message'/>
                </div>




            </div>

        </div>
    )
};
