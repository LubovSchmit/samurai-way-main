import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../../../../commun/formsControls/FormsControls';
import {maxLengthCreator, required} from '../../../../utils/validators/validators';


const maxLength100 = maxLengthCreator(100)
const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field name={'newMessageBody'}
                       component={Textarea}
                       validate={[required, maxLength100]}
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