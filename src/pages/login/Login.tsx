import React from 'react';
import style from './Login.module.scss';
import {LoginReduxForm} from './LoginReduxForm';

type PropsLoginType = {}


export const Login = (props: PropsLoginType) => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }
    return (
        <div className={style.loginContainer}>
            <h1> Login </h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};


