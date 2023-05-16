import React from 'react';
import style from './Main.module.scss';
import {Nav} from './nav/Nav';
import {Content} from './content/Content';
import {ButtonNav} from './nav/buttonNav/ButtonNav';
import {ActionType, StatePropsType} from '../../redux/state';


type PropsType = {
    state: StatePropsType,
    dispatch: (action: ActionType) => void
}

export const Main = (props: PropsType) => {
    return (

        <div id="main" className={style.mainBlock}>
            <div className={style.mainContainer}>

                <div className={style.nav}>
                    <ButtonNav/>
                    <Nav/>
                </div>

                <div className={style.content}>
                    <Content state={props.state}
                             dispatch={props.dispatch}

                    />
                </div>

            </div>
        </div>
    )
}