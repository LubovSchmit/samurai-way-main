import React from 'react';
import style from './Profile.module.scss';
import {AvaPersonalData} from './avaPersonalData/AvaPersonalData';
import {Cover} from './cover/Cover';
import {Friends} from './friends/Friends';
import {FriendType} from '../../../../redux/state';


type PropsType = {
    friends: Array<FriendType>
}

export const Profile = (props: PropsType) => {
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

            <div>
                <div className={style.friendsContainer}>
                    <Friends friends={props.friends}/>
                </div>
            </div>

        </div>
    )
}