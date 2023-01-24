import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.scss';


export const Nav = () => {


    return (
        <div className={style.nav}>

            <div className={style.hrefContainer}>
                <div className={style.href}>
                    <NavLink to={'/profile'}>Profile</NavLink>
                </div>
                <div className={style.href}>
                    <NavLink to={'/posts'}>Posts</NavLink>
                </div>
                <div className={style.href}>
                    <NavLink to={'/dialogs'}>Dialogs</NavLink>
                </div>
                <div className={style.href}>
                    <NavLink to={'/settings'}>Settings</NavLink>
                </div>

            </div>

        </div>
    )

}