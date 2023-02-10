import React from 'react';
import style from './App.module.scss';
import {Header} from './pages/header/Header';
import {Main} from './pages/main/Main';
import {Footer} from './pages/footer/Footer';
import {Route} from 'react-router-dom';
import {Dialogs} from './pages/main/content/dialogs/Dialogs';
import {Profile} from './pages/main/content/profile/Profile';
import {Posts} from './pages/main/content/posts/Posts';
import {Settings} from './pages/main/content/settings/Settings';
import {Nav} from './pages/main/nav/Nav';


function App() {
    return (

        <div className={style.appBlock}>

            <Header/>

            <Route path={'/'} render={() => <Main/>}/>

            <Footer/>

        </div>

    );
}


export default App;
