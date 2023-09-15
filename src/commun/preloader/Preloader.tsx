import style from './Preloader.module.scss';
import preloader from '../../assets/images/preloader.svg';
import React from 'react';



export const Preloader = () => {
   return  <img className={style.preloader} src={preloader} alt="preloader"/>
}
