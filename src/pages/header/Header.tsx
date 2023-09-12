import React from 'react';
import style from './Header.module.scss';
import {NavLink} from 'react-router-dom';


type PropsType = {
    isAuth: boolean
    login: string | null
    email: string | null
    userId: number | null
    logout: () => void

}

export const Header = (props: PropsType) => {

    return (
        <div id="header" className={style.header}>

            <div>{props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'} className={style.loginBlock}>Login</NavLink>} </div>

            <div>{props.isAuth ? props.email : null} </div>

            <div>{props.isAuth ? props.userId : null} </div>

        </div>

    )
}