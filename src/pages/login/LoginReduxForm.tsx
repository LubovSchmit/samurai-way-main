import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {maxLengthCreator, required} from '../../utils/validators/validators';
import {Input} from '../../commun/formsControls/FormsControls';

const maxLength10 = maxLengthCreator(10)
const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'}
                       component={Input}
                       validate={[required, maxLength10]}
                       placeholder={'Login'}/>
            </div>

            <div>
                <Field name={'password'}
                       component={Input}
                       validate={[required, maxLength10]}
                       placeholder={'Password'}/>
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


export const LoginReduxForm = reduxForm({
        form: 'login'
    })(LoginForm)
;