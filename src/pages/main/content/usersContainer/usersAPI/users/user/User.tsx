import React from 'react';
import style from './User.module.scss';
import userPhoto from '../../../../../../../assets/images/userPhoto.jpg'


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
        props.followUser(props.id)
    }
    const onClickUnfollowUserButton = () => {
        props.unfollowUser(props.id)
    }

    return (

        <div className={style.userContainer}>

            <div className={style.userInformationContainer}>
                <div className={style.userFullName}>{props.name}</div>

                <div className={style.userPhoto}>
                    <img src={props.photoSmall !== null ? props.photoSmall : userPhoto} className={style.photo} alt="user's avatar"/>
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
