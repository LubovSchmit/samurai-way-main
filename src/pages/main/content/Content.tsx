import React from 'react';
import style from './Content.module.scss';
import {Profile} from './profile/Profile';
import {Dialogs} from './dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {Posts} from './posts/Posts';
import {Settings} from './settings/Settings';


export const Content = () => {
    return (
        <div id="content" className={style.contentBlock}>

            <Route path="/profile" component={Profile}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/dialogs" component={Dialogs}/>
            <Route path="/settings" component={Settings}/>

        </div>
    )
}