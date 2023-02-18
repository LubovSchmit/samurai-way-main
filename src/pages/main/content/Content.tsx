import React from 'react';
import style from './Content.module.scss';
import {Profile} from './profile/Profile';
import {Dialogs} from './dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {Settings} from './settings/Settings';
import {Posts} from './posts/Posts';
import {StatePropsType} from '../../../redux/state';



type PropsType = {
    state: StatePropsType,
    addPost: (message: string) => void
}

export const Content = (props: PropsType) => {




    return (
        <div id="content" className={style.contentBlock}>
            <Route exact path={'/profile'} render={() => <Profile/>}/>
            <Route exact path={'/posts'} render={() => <Posts posts={props.state.postsPage.posts} message={props.state.postsPage.newPostMessage} addPost={props.addPost}/>}/>
            <Route exact path={'/dialogs'} render={() => <Dialogs dialogNames={props.state.dialogsPage.dialogNames}
                                                                  messages={props.state.dialogsPage.messages}/>}/>
            <Route exact path={'/settings'} render={() => <Settings/>}/>
        </div>
    )
}