import React from 'react';
import {Field, reduxForm} from 'redux-form'


const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'}
                       component={'input'}
                       placeholder={'Login'}/>
            </div>

            <div>
                <Field name={'password'}
                       component={'input'}
                       placeholder={'Password'}/>
            </div>

            <div>
                <Field name={'rememberMe'}
                       component={'input'}
                       type="checkbox"/> Remember me
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
;