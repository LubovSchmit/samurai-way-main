import React from 'react';
import style from './Login.module.scss';
import {FormDataType, LoginReduxForm} from './LoginReduxForm';
import {login} from '../../redux/reducers/authReducer/authReducer';
import {connect} from 'react-redux';




type PropsLoginType = {
    login: (email: string, password: string, rememberMe: boolean)=> void
}


const Login = (props: PropsLoginType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    return (
        <div className={style.loginContainer}>
            <h1> Login </h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default connect(null, {login})(Login)
