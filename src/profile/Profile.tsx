import React from 'react';
import style from './Profile.module.scss';
import {Cover} from '../cover/Cover';
import {AvaDescription} from '../avaDescription/AvaDescription';
import {Posts} from '../posts/Posts';

export const Profile = () => {
    return (
        <div className={style.profileContainer}>

            <div className={style.coverBlock}>
                <Cover/>
            </div>

            <div className={style.personalInfo}>
                <div>
                    <AvaDescription/>
                </div>

                <div>
                    <Posts/>
                </div>

            </div>

        </div>
    )
}