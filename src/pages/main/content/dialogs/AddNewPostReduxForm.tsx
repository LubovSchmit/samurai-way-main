import React from 'react';
import {Field, reduxForm} from 'redux-form';



const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field name={'newMessageBody'}
                       component={'textarea'}
                       placeholder={'Enter your message'}/>
            </div>

            <div>
                <button> Send message</button>
            </div>

        </form>
    )
}

export const AddMessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)