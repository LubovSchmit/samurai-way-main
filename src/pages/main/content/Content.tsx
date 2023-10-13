import React, {lazy} from 'react';
import style from './Content.module.scss';
import {Route} from 'react-router-dom';
import ProfileContainer from './profile/ProfileContainer';
import {Preloader} from '../../../commun/preloader/Preloader';

const DialogsContainer = lazy(() => import('./dialogs/DialogsContainer'));
const UsersContainer = lazy(() => import('./usersContainer/UsersContainer'));
const PostsContainer = lazy(() => import('./posts/PostsContainer'));
const Settings = lazy(() => import('./settings/Settings'));


export const Content = () => {
    return (
        <div id="content" className={style.contentBlock}>
            <Route exact path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
            <Route exact path={'/posts'} render={() => {
                return <React.Suspense fallback={<Preloader/>}>
                    <PostsContainer/>
                </React.Suspense>
            }}/>
            <Route exact path={'/dialogs'} render={() => {
                return <React.Suspense fallback={<Preloader/>}>
                    <DialogsContainer/>
                </React.Suspense>
            }}/>
            <Route exact path={'/users'} render={() => {
                return <React.Suspense fallback={<Preloader/>}>
                    <UsersContainer/>
                </React.Suspense>
            }}/>
            <Route exact path={'/settings'} render={() => {
                return <React.Suspense fallback={<Preloader/>}>
                    <Settings/>
                </React.Suspense>
            }}/>
        </div>
    )
}