import React from 'react';
import style from './Profile.module.scss';
import {AvaPersonalData} from './avaPersonalData/AvaPersonalData';
import {Cover} from './cover/Cover';
import {ProfileType} from '../../../../redux/reduxStore/reduxStore';
import {Preloader} from '../../../../commun/preloader/Preloader';


type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void

}

export const Profile = (props: PropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={style.profileContainer}>

            <div className={style.coverBlock}>
                <Cover/>
            </div>

            <div className={style.personalInfo}>

                <AvaPersonalData isOwner={props.isOwner}
                                 profile={props.profile}
                                 status={props.status}
                                 updateStatus={props.updateStatus}
                                 savePhoto={props.savePhoto}
                />

            </div>

        </div>
    )
}