import React from 'react';
import style from './DialogsItems.module.scss';
import {Dialog} from './dialog/Dialog';
import {v1} from 'uuid';


export const DialogsItems = () => {

    let dialogs = [
        {id: v1(), name: 'Luba'},
        {id: v1(), name: 'Leon'},
        {id: v1(), name: 'Pierre'},
        {id: v1(), name: 'Mira'},
        {id: v1(), name: 'Familichka'}
    ]

    let dialogsElements = dialogs.map(d => <Dialog key={d.id} name={d.name} id={d.id}/>)

    return (
        <div className={style.dialogsItemsContainer}>
            {dialogsElements}
        </div>
    )
};