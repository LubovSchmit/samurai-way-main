import React, {ChangeEvent, useState} from 'react';
import style from './Posts.module.scss';
import {Post} from './post/Post';
import {PostType} from '../../../../redux/reduxStore/reduxStore';


type PropsType = {
    id: string
    posts: Array<PostType>
    postText: string
    photo: string

    addPost: (newPostMessage: string) => void

}


export const Posts = (props: PropsType) => {
    let [newPostMessage, setNewPostMessage] = useState<string>('')

    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewPostMessage(e.currentTarget.value)
    }
    const addPostHandler = () => {
        if (newPostMessage.trim() === '') return
        props.addPost(newPostMessage)
        setNewPostMessage('')
    }

    let postsElements = props.posts
        .map(p => <Post key={p.id} id={p.id}
                        postText={p.postText}
                        likesCount={p.likesCount}
                        photo={props.photo}
        />)

    return (
        <div className={style.postsContainer}>

            <div className={style.textareaButtonContainer}>

                <textarea className={style.textarea}
                          placeholder={'Enter your post'}
                          value={newPostMessage}
                          onChange={onChangeTextareaHandler}>''</textarea>

                <button className={style.button} onClick={addPostHandler}>
                    Add post
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
