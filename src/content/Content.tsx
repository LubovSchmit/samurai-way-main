import React from "react";
import style from './Content.module.scss';
import {Profile} from '../profile/Profile';
import {Messages} from '../messages/Messages';


export const Content = () => {
    return (
        <div id='content' className={style.contentBlock}>
            <Profile/>
           {/* <Messages/>*/}
            {/*<News/>
            <Settings/>*/}
        </div>
    )
}