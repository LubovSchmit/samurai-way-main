import React from 'react';
import style from './User.module.scss';
import userPhoto from '../../../../../../../assets/images/userPhoto.jpg'
import {NavLink} from 'react-router-dom';
import {followAPI} from '../../../../../../../api/api';

type PropsType = {
    userId: string
    name: string
    photoSmall: string
    status: string
    followed: boolean
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
}

export const User = (props: PropsType) => {

    const onClickFollowUserButton = () => {
        /* axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.userId}`,
             {},
             {withCredentials: true})*/
        followAPI.postFollow(props.userId)
            .then(data => {
                if (data.resultCode == 0) {
                    props.followUser(props.userId)
                }
            })

    }
    const onClickUnfollowUserButton = () => {
        /*       axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.userId}`,
                   {withCredentials: true})*/
        followAPI.deleteFollow(props.userId)
            .then(data => {
                if (data.resultCode == 0) {
                    props.unfollowUser(props.userId)
                }
            })

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
                            onClick={onClickUnfollowUserButton}>Unfollow </button> :
                    <button className={style.buttonFollow}
                            onClick={onClickFollowUserButton}>Follow </button>}
            </div>

        </div>

    )
};
