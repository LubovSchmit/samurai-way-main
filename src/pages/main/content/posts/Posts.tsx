import React, {ChangeEvent, useState} from 'react';
import style from './Posts.module.scss';
import {PostType} from '../../../../redux/state';
import {Post} from './post/Post';


type PropsType = {
    message: string
    posts: Array<PostType>,
    addPost: (message: string) => void

}

export const Posts = (props: PropsType) => {
    let [newPostMessage, setNewPostMessage] = useState('')

    let postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)


    const addPostMessageHandler = () => {
        if (newPostMessage.trim() === '') return
        props.addPost(newPostMessage.trim())
        setNewPostMessage('')
    }
    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewPostMessage(e.currentTarget.value)
    }

    return (
        <div className={style.postsContainer}>

            <div className={style.textareaButtonContainer}>

                <textarea className={style.textarea}
                          value={newPostMessage}
                          onChange={onChangeTextareaHandler}>''</textarea>

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
