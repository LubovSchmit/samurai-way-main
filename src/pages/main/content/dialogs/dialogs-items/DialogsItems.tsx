import React from 'react';
import style from './DialogsItems.module.scss';
import {Dialog} from './dialog/Dialog';
import {DialogNameType} from '../../../../../redux/state';


type PropsType = {
    dialogNames: Array<DialogNameType>
}

export const DialogsItems = (props: PropsType) => {

    let dialogsNames = props.dialogNames.map(d => <Dialog key={d.id} name={d.name} id={d.id}/>)

    return (<div className={style.dialogsItemsContainer}>{dialogsNames}</div>)
};