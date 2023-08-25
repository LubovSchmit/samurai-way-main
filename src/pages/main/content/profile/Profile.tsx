import React from 'react';
import style from './Profile.module.scss';
import {AvaPersonalData} from './avaPersonalData/AvaPersonalData';
import {Cover} from './cover/Cover';
import {ProfileType} from '../../../../redux/reduxStore/reduxStore';
import {Route} from 'react-router-dom';
import {Preloader} from '../../../../commun/preloader/Preloader';
import PostsContainer from '../posts/PostsContainer';


type PropsType = {
    profile: ProfileType
}

export const Profile = (props: PropsType) => {

    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={style.profileContainer}>

            <div className={style.coverBlock}>
                <Cover/>
            </div>

            <div className={style.personalInfo}>
                <div>
                    <AvaPersonalData profile={props.profile}/>
                </div>
            </div>
            <div>
                <Route exact path={'/posts'} render={() => <PostsContainer/>}/>
            </div>

        </div>
    )
}