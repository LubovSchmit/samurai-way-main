import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Nav.module.scss';


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
                    <NavLink to={'/users'} activeClassName={style.active}>Users</NavLink>
                </div>
                <div className={style.link}>
                    <NavLink to={'/settings'} activeClassName={style.active}>Settings</NavLink>
                </div>

            </div>



        </div>
    )

}