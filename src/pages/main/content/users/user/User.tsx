import React from 'react';
import style from './User.module.scss';
import {UserLocationType} from '../../../../../redux/reduxStore/reduxStore';


type PropsType = {
    userId: string
    fullName: string
    photoURL: string
    status: string
    location: UserLocationType
    followed: boolean
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
}

export const User = (props: PropsType) => {

    const onClickFollowUserButton = () => {
        props.followUser(props.userId)
    }
    const onClickUnfollowUserButton = () => {
        props.unfollowUser(props.userId)
    }

    return (
        <div className={style.userContainer}>

            <div className={style.userInformationContainer}>
                <div className={style.userFullName}>{props.fullName}</div>

                <div className={style.userPhotoURL}>
                    <img src={props.photoURL} className={style.photoURL} alt="user's avatar"/>
                </div>
                <div className={style.userStatus}>{props.status}</div>
            </div>




            <div className={style.userFollowAndButtonContainer}>
                {props.followed ?
                    <button className={style.buttonUnfollow}
                            onClick={onClickUnfollowUserButton}>Unfollow </button> :
                    <button className={style.buttonFollow}
                            onClick={onClickFollowUserButton}>Follow </button>}
            </div>

        </div>

    )
};
