import React from 'react';
import style from './Profile.module.scss';
import {AvaPersonalData} from './avaPersonalData/AvaPersonalData';
import {Posts} from './posts/Posts';
import {Cover} from './cover/Cover';


export const Profile = () => {
    return (
        <div className={style.profileContainer}>

            <div className={style.coverBlock}>
                <Cover/>
            </div>

            <div className={style.personalInfo}>
                <div>
                    <AvaPersonalData/>
                </div>

                <div>
                    <Posts/>
                </div>

            </div>

        </div>
    )
}