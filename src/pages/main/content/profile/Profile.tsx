import React from 'react';
import style from './Profile.module.scss';
import {AvaPersonalData} from './avaPersonalData/AvaPersonalData';
import {Cover} from './cover/Cover';



type PropsType = {

}

export const Profile = (props: any) => {
    return (
        <div className={style.profileContainer}>

            <div className={style.coverBlock}>
                <Cover/>
            </div>

            <div className={style.personalInfo}>
                <div>
                    <AvaPersonalData/>
                </div>
            </div>



        </div>
    )
}