import React from 'react';
import style from './PersonalData.module.scss';
import {ProfileType} from '../../../../../../redux/reduxStore/reduxStore';

type PropsType = {
    profile: ProfileType
}

export const PersonalData = (props: PropsType) => {
    return (
        <div className={style.personalDataContainer}>
            <div>
                <div className={style.headline}> Name:</div>
                <div className={style.name}>{props.profile.fullName}</div>
            </div>

            <div>
                <div className={style.headline}> About me:</div>
                <div className={style.aboutMe}>{props.profile.aboutMe}</div>
            </div>

            <div>{props.profile.lookingForAJob}</div>

            <div>{props.profile.LookingForAJobDescription}</div>

            <div>
                <div className={style.headline}> Contacts:</div>
                <div className={style.contacts}>
                    <div>{props.profile.contacts.vk}</div>
                    <div>{props.profile.contacts.facebook}</div>
                    <div>{props.profile.contacts.github}</div>
                    <div>{props.profile.contacts.instagram}</div>
                    <div>{props.profile.contacts.youtube}</div>
                    <div>{props.profile.contacts.twitter}</div>
                    <div>{props.profile.contacts.mainLink}</div>
            </div>



            </div>


        </div>


    )
}