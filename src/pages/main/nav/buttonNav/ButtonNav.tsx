import React, {useState} from 'react';
import style from './ButtonNav.module.scss';


export function ButtonNav() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    let onBtnNavClick = () => {
        setMenuIsOpen(
            !menuIsOpen
        );
    }
return (

    <button className={style.buttonNav} onClick={onBtnNavClick}> Menu </button>
)

}