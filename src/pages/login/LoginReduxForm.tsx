import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {maxLengthCreator, required} from '../../utils/validators/validators';
import {Input} from '../../commun/formsControls/FormsControls';


export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}


const maxLength10 = maxLengthCreator(40)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'}
                       component={Input}
                       validate={[required, maxLength10]}
                       placeholder={'Email'}/>
            </div>

            <div>
                <Field name={'password'}
                       component={Input}
                       validate={[required, maxLength10]}
                       placeholder={'Password'}
                       type={'password'}/>
            </div>

            <div>
                <Field name={'rememberMe'}
                       component={Input}
                       type="checkbox"/> Remember me
            </div>

            <div>
                <button>Log in</button>
            </div>
        </form>
    );
};


export const LoginReduxForm = reduxForm<FormDataType>({
        form: 'login'
    })(LoginForm)
;