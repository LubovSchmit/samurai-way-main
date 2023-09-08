import React from 'react';
import {Field, reduxForm} from 'redux-form';
import style from './Posts.module.scss';
import {maxLengthCreator, required} from '../../../../utils/validators/validators';

const maxLength10 = maxLengthCreator(10)
const AddNewPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newPostText'}
                   component={'textarea'}
                   placeholder={'Enter your post'}
                   validate={[required, maxLength10]}
            />

            <button className={style.button} >
                Add post
            </button>
        </form>
    )}

export const AddNewPostReduxForm = reduxForm({
    form: 'profileAddNewPostForm'
})(AddNewPostForm)