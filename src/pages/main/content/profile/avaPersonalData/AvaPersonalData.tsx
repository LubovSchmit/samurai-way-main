import style from './AvaPersonalData.module.scss';
import React from 'react';
import {Ava} from './ava/Ava';
import {PersonalData} from './personalData/PersonalData';
import {ProfileType} from '../../../../../redux/reduxStore/reduxStore';

type PropsType = {

    profile: ProfileType
}
export const AvaPersonalData = (props: PropsType) => {
    return (
        <div className={style.PersonalContainer}>

            <div className={style.avaBlock}>
                <Ava photo={props.profile.photos.small} id={props.profile.userId}/>
            </div>

            <div className={style.personalDataBlock}>
                <PersonalData profile={props.profile}/>
            </div>

        </div>
    )
}