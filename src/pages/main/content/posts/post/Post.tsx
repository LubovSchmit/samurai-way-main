import React from 'react';
import style from './Post.module.scss';
import {Ava} from '../../profile/avaPersonalData/ava/Ava';


type PropsType = {
    id: string
    newPostText: string | undefined
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


            <div className={style.text}>
                {props.newPostText}
            </div>

            <div className={style.likesContainer}>
                <div className={style.likeImg}></div>
                <div className={style.likesCount}>{props.likesCount}</div>
            </div>

        </div>
    )
};
