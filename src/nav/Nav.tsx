import React from 'react';
import style from './Nav.module.scss';


export const Nav = () => {
    return (
        <div className={style.nav}>
            <div className={style.name}> </div>
            <div className={style.hrefBlock}>
                <div>
                    <a href="">Profile</a>
                </div>
                <div>
                    <a href="">Messages</a>
                </div>
                <div>
                    <a href="">News</a>
                </div>
                <div>
                    <a href="">Settings</a>
                </div>
            </div>

        </div>
    )
}