import React from 'react';
import style from './Settings.module.scss';
import {compose} from 'redux';
import {WithAuthRedirect} from '../../../../hoc/WithAuthRedirect';


const Settings = () => {
    return (
        <div className={style.settingsContainer}>

            <div>Settings</div>

            <div> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corporis dolorem dolorum iure libero, magni maxime molestiae optio pariatur, quasi quidem ratione repellat saepe sunt temporibus, tenetur veniam? Pariatur, soluta.</div>

        </div>
    )
};

export default compose<React.ComponentType>(
    WithAuthRedirect,
)(Settings)