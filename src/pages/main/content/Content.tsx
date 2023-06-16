import React from 'react';
import style from './Content.module.scss';
import {Route} from 'react-router-dom';
import {Settings} from './settings/Settings';
import {DialogsContainer} from './dialogs/DialogsContainer';
import {UsersContainer} from './usersContainer/UsersContainer';
import {ProfileContainer} from './profile/ProfileContainer';


type PropsType = {
   /* state: StatePropsType,
    dispatch: (action: ActionsType) => void*/

}

export const Content = (props: PropsType) => {

    return (
        <div id="content" className={style.contentBlock}>
            <Route exact path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
            {/*<Route exact path={'/posts'} render={() => <PostsContainer />}/>*/}
            <Route exact path={'/dialogs'} render={() => <DialogsContainer  />}/>
            <Route exact path={'/settings'} render={() => <Settings />}/>
            <Route exact path={'/users'} render={() => <UsersContainer  />}/>
        </div>
    )
}