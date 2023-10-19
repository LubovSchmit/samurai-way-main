import React from 'react';
import style from './PersonalData.module.scss';
import {ContactsType, ProfileType} from '../../../../../../redux/reduxStore/reduxStore';
import Contact from '../contacts/Contact';


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
                <b>Looking for a job:</b>
                {props.profile.lookingForAJob ? ' yes' : ' no'}
            </div>
            {props.profile.lookingForAJob &&
            <div>
                <b>My professional skills:</b>
                {props.profile.lookingForAJobDescription}
            </div>
            }


            <div>
                <div className={style.headline}> Contacts:</div>
                <div className={style.contacts}>
                    {Object.keys(props.profile.contacts).map(key => {
                        return <Contact key={key}
                                        contactTitle={key}
                                        contactValue={props.profile.contacts[key as keyof ContactsType]}/>
                    })}
                </div>


            </div>


        </div>


    )
}