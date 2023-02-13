import React from 'react';
import style from './Posts.module.scss';
import {PostType} from '../../../../redux/state';
import {Post} from './post/Post';










type PropsType= {
    posts: Array<PostType>
}

export const Posts = (props: PropsType) => {



    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

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
