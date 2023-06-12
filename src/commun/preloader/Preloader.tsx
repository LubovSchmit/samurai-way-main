import style from './Preloader.module.scss';
import preloader from '../../assets/images/preloader.svg';
import React from 'react';

type PropsType = {

}

export const Preloader = (props: PropsType) => {
   return  <img className={style.preloader} src={preloader} alt="preloader"/>
}
