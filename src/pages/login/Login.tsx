import React from 'react';
import style from './Login.module.scss';
import {reduxForm} from 'redux-form';

type PropsLoginType = {}
type PropsLoginFormType = {}

export const Login = (props: PropsLoginType) => {
    return (
        <div className={style.loginContainer}>
            <h1> Login </h1>
            <LoginReduxForm/>
        </div>
    );
};



const LoginForm = (props: PropsLoginFormType) => {
    return (
        <form>
            <div>
                <input type="text" placeholder={'Login'}/>
            </div>

            <div>
                <input type="text" placeholder={'Password'}/>
            </div>

            <div>
                <input type="checkbox"/> Remember me
            </div>

            <div>
                <button>Log in</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)
