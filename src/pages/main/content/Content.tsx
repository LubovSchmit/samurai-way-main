import React, {lazy} from 'react';
import style from './Content.module.scss';
import {Route} from 'react-router-dom';
import ProfileContainer from './profile/ProfileContainer';
const DialogsContainer = lazy(() => import('./dialogs/DialogsContainer'));
const UsersContainer = lazy(() => import('./usersContainer/UsersContainer'));
const PostsContainer = lazy(() => import('./posts/PostsContainer'));
const Settings = lazy(() => import('./settings/Settings'));







export const Content = () => {
    return (
        <div id="content" className={style.contentBlock}>
            <Route exact path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
            <Route exact path={'/posts'} render={() => <PostsContainer />}/>
            <Route exact path={'/dialogs'} render={() => <DialogsContainer />}/>
            <Route exact path={'/users'} render={() => <UsersContainer  />}/>
            <Route exact path={'/settings'} render={() => <Settings />}/>
        </div>
    )
}