import React from 'react';
import style from './Posts.module.scss';
import {Post} from './post/Post';
import {PostType} from '../../../../redux/reduxStore/reduxStore';
import {AddNewPostReduxForm} from './AddNewPostReduxForm';


type PropsType = {
    userId: string
    posts: Array<PostType>
    newPostText: string | undefined
    photo: string | null
    addPost: (newPostMessage: string) => void
}


export const Posts = (props: PropsType) => {

    const onSubmit = (formData: any) => {
        if (formData.newPostText.trim() === '') return
        props.addPost(formData.newPostText)
    }

    let postsElements = props.posts
        .map(p => <Post key={p.userId} id={p.userId}
                        newPostText={p.newPostText}
                        likesCount={p.likesCount}
                        photo={props.photo}
        />)

    return (
        <div className={style.postsContainer}>

            <div className={style.textareaButtonContainer}>

                <AddNewPostReduxForm onSubmit={onSubmit}/>

            </div>

            <div className={style.posts}>
                <div className={style.item}>
                    {postsElements}
                </div>
            </div>

        </div>
    )
};


