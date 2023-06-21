import React from 'react';
import style from './Header.module.scss';
import {NavLink} from 'react-router-dom';


type PropsType = {
    isAuth: boolean
    login: string | null
    email: string | null
    userId: string | null


}

export const Header = (props: PropsType) => {

    return (
        <div id="header" className={style.header}>

            <div>{props.isAuth ? props.login  : <NavLink to={'/login'} className={style.loginBlock}>Login</NavLink>} </div>
            <div>{props.isAuth ? props.email  : null} </div>
            <div>id:{props.isAuth ? props.userId  : null} </div>

        </div>

    )
}