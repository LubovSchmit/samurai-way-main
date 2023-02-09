import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Dialog.module.scss';


type DialogPropsType = {
    name: string
    id: string

}


export const Dialog = (props: DialogPropsType) => {
    return (
        <div className={style.dialogContainer}>





            <div className={style.dialog}>

                {/*<img className={style.personalAva}/>*/}

                <NavLink to={'/dialogs/' + props.id} activeClassName={style.active}>
                    {props.name}
                </NavLink>

            </div>

        </div>
    )
}