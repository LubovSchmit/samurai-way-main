import React from 'react';
import style from './Content.module.scss';
import {Profile} from './profile/Profile';
import {Dialogs} from './dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {Settings} from './settings/Settings';
import {Posts} from './posts/Posts';



export const Content = () => {
    return (
        <div id="content" className={style.contentBlock}>

            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/posts" component={Posts}/>
            <Route exact path="/dialogs" component={Dialogs}/>
            <Route exact path="/settings" component={Settings}/>

        </div>
    )
}