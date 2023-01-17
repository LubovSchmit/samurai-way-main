import React from 'react';
import style from './App.module.scss';
import {Header} from './header/Header';
import {Profile} from './profile/Profile';
import {Nav} from './nav/Nav';
import {Main} from './main/Main';
import {Footer} from './footer/Footer';

function App() {
    return (
        <div className={style.app}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}


export default App;
