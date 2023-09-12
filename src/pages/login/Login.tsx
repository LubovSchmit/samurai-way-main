import React from 'react';
import style from './Login.module.scss';
import {FormDataType, LoginReduxForm} from './LoginReduxForm';
import {login} from '../../redux/reducers/authReducer/authReducer';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {StatePropsType} from '../../redux/reduxStore/reduxStore';




type PropsLoginType = {
    login: (email: string, password: string, rememberMe: boolean)=> void
    isAuth: boolean
}


const Login = (props: PropsLoginType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }



    return (
        <div className={style.loginContainer}>
            <h1> Login </h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
const mapStateToProps = (state: StatePropsType) =>({
        isAuth: state.auth.data.isAuth
    })
export default connect(mapStateToProps, {login})(Login)
