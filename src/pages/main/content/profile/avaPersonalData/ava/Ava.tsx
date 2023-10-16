import React, {ChangeEvent, ChangeEventHandler} from 'react';
import style from './Ava.module.scss';
import userPhoto from '../../../../../../assets/images/userPhoto.jpg';
import {PhotosType} from '../../../../../../redux/reduxStore/reduxStore';


type PropsType = {
    id: string
    photo: string | null
    isOwner: boolean
    savePhoto: (file: File) => void

}
export const Ava = (props: PropsType) => {

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }

    }

    return (
        <div className={style.avaContainer}>
            <div className={style.photo}>
                {props.photo ?
                    <img className={style.photo} src={props.photo} alt="photo"/> :
                    <img className={style.photo} src={userPhoto} alt="icon"/>}
            </div>


            <div className={style.input}>{props.isOwner && <input className={style.input} type={'file'} onChange={onMainPhotoSelected}/>}</div>

        </div>

    )
}