import React from 'react';
import style from './Profile.module.scss';
import {AvaPersonalData} from './avaPersonalData/AvaPersonalData';
import {Cover} from './cover/Cover';
import {FriendsProfileContainer} from './friends/FriendsProfileContainer';


type PropsType = {
    /*friends: Array<FriendType>*/
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
                    <FriendsProfileContainer />
                </div>
            </div>

        </div>
    )
}