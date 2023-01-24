import style from './AvaPersonalData.module.scss';
import React from 'react';
import {Ava} from './ava/Ava';
import {PersonalData} from './personalData/PersonalData';


export const AvaPersonalData = () => {
    return (
        <div className={style.PersonalContainer}>

            <div className={style.avaBlock}>
                <Ava/>
            </div>

            <div className={style.personalDataBlock}>
                <PersonalData/>
            </div>

        </div>
    )
}