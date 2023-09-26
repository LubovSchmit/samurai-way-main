import React from 'react';
import style from './User.module.scss';
import userPhoto from '../../../../../../../assets/images/userPhoto.jpg'
import {NavLink} from 'react-router-dom';


type PropsType = {
    userId: string
    name: string
    photoSmall: string
    status: string
    followed: boolean
    inProgress: Array<string>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}

export const User = (props: PropsType) => {
    const onClickFollowUserButton = () => {
        props.follow(props.userId)
    }
    const onClickUnfollowUserButton = () => {
        props.unfollow(props.userId)
    }

    return (
        <div className={style.userContainer}>
            <div className={style.userInformationContainer}>

                <div className={style.userFullName}>{props.name}</div>

                <NavLink to={'/profile/' + props.userId}>
                    <div className={style.userPhoto}>
                        <img src={props.photoSmall !== null ? props.photoSmall : userPhoto} className={style.photo}
                             alt="user's avatar"/>
                    </div>
                </NavLink>

                <div className={style.userStatus}>{props.status}</div>

            </div>

            <div className={style.userFollowAndButtonContainer}>
                {props.followed ?
                    <button className={style.buttonUnfollow}
                            disabled={props.inProgress.some(userId => userId === props.userId)}
                            onClick={onClickUnfollowUserButton}>Unfollow </button> :
                    <button className={style.buttonFollow}
                            disabled={props.inProgress.some(userId => userId === props.userId)}
                            onClick={onClickFollowUserButton}>Follow </button>}
            </div>
        </div>
    )
};
