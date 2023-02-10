import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import style from './Nav.module.scss';
import {Dialogs} from '../content/dialogs/Dialogs';
import {Main} from '../Main';
import {Profile} from '../content/profile/Profile';
import {Posts} from '../content/posts/Posts';
import {Settings} from '../content/settings/Settings';


export const Nav = () => {


    return (
        <div className={style.nav}>

            <div className={style.hrefContainer}>
                <div className={style.link}>
                    <NavLink to={'/profile'} activeClassName={style.active}>Profile</NavLink>
                </div>
                <div className={style.link}>
                    <NavLink to={'/posts'} activeClassName={style.active}>Posts</NavLink>
                </div>
                <div className={style.link}>
                    <NavLink to={'/dialogs'} activeClassName={style.active}>Dialogs</NavLink>
                </div>
                <div className={style.link}>
                    <NavLink to={'/settings'} activeClassName={style.active}>Settings</NavLink>
                </div>

            </div>



        </div>
    )

}