import React from 'react';
import {Field, reduxForm} from 'redux-form';
import style from './Posts.module.scss';




const AddNewPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newPostText'}
                   component={'textarea'}
                   placeholder={'Enter your post'} />

            <button className={style.button} >
                Add post
            </button>
        </form>
    )}

export const AddNewPostReduxForm = reduxForm({
    form: 'profileAddNewPostForm'
})(AddNewPostForm)