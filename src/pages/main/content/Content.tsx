import React from 'react';
import style from './Content.module.scss';
import {Profile} from './profile/Profile';
import {Dialogs} from './dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {Settings} from './settings/Settings';
import {Posts} from './posts/Posts';
import {ActionsType, StatePropsType} from '../../../redux/reduxStore/reduxStore';
import {PostsContainer} from './posts/PostsContainer';



type PropsType = {
    state: StatePropsType,
    dispatch: (action: ActionsType) => void

}

export const Content = (props: PropsType) => {

    return (
        <div id="content" className={style.contentBlock}>
            <Route exact path={'/profile'} render={() => <Profile friends={props.state.profilePage.friends}/>}/>
            <Route exact path={'/posts'} render={() => <PostsContainer posts={props.state.postsPage.posts}
                                                              postText={props.state.postsPage.newPostText}
                                                              dispatch={props.dispatch}

            />}/>
            <Route exact path={'/dialogs'} render={() => <Dialogs dialogNames={props.state.dialogsPage.dialogNames}
                                                                  messages={props.state.dialogsPage.messages}
                                                                  dispatch={props.dispatch}/>}/>
            <Route exact path={'/settings'} render={() => <Settings/>}/>
        </div>
    )
}