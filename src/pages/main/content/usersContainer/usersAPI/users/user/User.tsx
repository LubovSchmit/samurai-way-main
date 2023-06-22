import React from 'react';
import style from './User.module.scss';
import userPhoto from '../../../../../../../assets/images/userPhoto.jpg'
import {NavLink} from 'react-router-dom';
import axios from 'axios';

type PropsType = {
    id: string
    name: string
    photoSmall: string
    status: string
    followed: boolean
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
}

export const User = (props: PropsType) => {

    const onClickFollowUserButton = () => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
            {},
            {withCredentials: true})
            .then(response => {
               if (response.data.resultCode == 0) {
                   props.followUser(props.id)
               }
            })

    }
    const onClickUnfollowUserButton = () => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
            {withCredentials: true})
            .then(response => {
                if (response.data.resultCode == 0) {
                    props.unfollowUser(props.id)
                }
            })

    }

    return (

        <div className={style.userContainer}>

            <div className={style.userInformationContainer}>
                <div className={style.userFullName}>{props.name}</div>

                <NavLink to={'/profile/' + props.id}>

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
