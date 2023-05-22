import React, {ChangeEvent} from 'react';
import style from './Posts.module.scss';
import {Post} from './post/Post';
import {PostType} from '../../../../redux/reduxStore/reduxStore';


type PropsType = {
    posts: Array<PostType>
    postText: string
    addPost: (newPostMessage: string) => void
    newPostMessage: string
    setNewPostMessage: (newPostMessage: string) => void
}


export const Posts = (props: PropsType) => {

    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.setNewPostMessage(e.currentTarget.value)
    }
    const addPostHandler = () => {
        if (props.newPostMessage.trim() === '') return
        props.addPost(props.newPostMessage)
    }

    let postsElements = props.posts
        .map(p => <Post key={p.id} id={p.id}
                        postText={p.postText}
                        likesCount={p.likesCount}/>)

    return (
        <div className={style.postsContainer}>

            <div className={style.textareaButtonContainer}>

                <textarea className={style.textarea}
                          placeholder={'Enter your post'}
                          value={props.newPostMessage}
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
