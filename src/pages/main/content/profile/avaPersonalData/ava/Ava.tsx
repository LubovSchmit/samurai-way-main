import React from 'react';
import style from './Ava.module.scss';
import userPhoto from '../../../../../../assets/images/userPhoto.jpg';


type PropsType = {
    id: string
    photo: string | null

}
export const Ava = (props: PropsType) => {
    return (
        <span className={style.avaContainer}>
            {props.photo ?
                <img className={style.photo} src={props.photo} alt="photo"/> :
                <img className={style.photo} src={userPhoto} alt="icon"/>}

        </span>
    )
}