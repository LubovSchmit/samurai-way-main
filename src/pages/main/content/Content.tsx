import React from 'react';
import style from './Content.module.scss';
import {Route} from 'react-router-dom';
import ProfileContainer from './profile/ProfileContainer';
import DialogsContainer from './dialogs/DialogsContainer';
import UsersContainer from './usersContainer/UsersContainer';
import PostsContainer from './posts/PostsContainer';
import Settings from './settings/Settings';





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