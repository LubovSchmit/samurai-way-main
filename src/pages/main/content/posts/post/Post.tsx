import React, {ChangeEvent, useState} from 'react';
import style from './Post.module.scss';
import {Ava} from '../../profile/avaPersonalData/ava/Ava';



type PropsType = {
    id: string
    postText: string
    likesCount: number
}

export const Post = (props: PropsType) => {
/*

    let [updatedPostMessage, setUpdatedPostMessage] = useState(props.postText)

    const changeDivToTextarea = () => {

    }

    const updatePostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>)=> {
        setUpdatedPostMessage(e.currentTarget.value)
    }
*/


    return (
        <div className={style.postContainer}>

            <div className={style.avaPost}>
                <Ava/>
            </div>

            <div className={style.text} >
                {props.postText}
            </div>

            <div className={style.likesContainer}>
                <div className={style.likeImg}></div>
                <div className={style.likesCount}>{props.likesCount}</div>
            </div>

        </div>
    )
};
