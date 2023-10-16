import style from './AvaPersonalData.module.scss';
import React from 'react';
import {Ava} from './ava/Ava';
import {PersonalData} from './personalData/PersonalData';
import {ProfileType} from '../../../../../redux/reduxStore/reduxStore';
import ProfileStatus from './profileStatus/ProfileStatus';

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void

}

export const AvaPersonalData = React.memo((props: PropsType) => {
    return (
        <div className={style.PersonalContainer}>

            <div className={style.avaStatusBlock}>

                <div className={style.avaBlock}>
                    <Ava id={props.profile.userId}
                         isOwner={props.isOwner}
                         photo={props.profile.photos.small}
                         savePhoto={props.savePhoto}
                    />
                </div>

                <div className={style.statusBlock}>
                    <ProfileStatus status={props.status}
                                   updateStatus={props.updateStatus}/>
                </div>

            </div>


            <div className={style.personalDataBlock}>
                <PersonalData profile={props.profile}/>
            </div>

        </div>
    )
})