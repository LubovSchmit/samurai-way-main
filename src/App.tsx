import React from 'react';
import style from './App.module.scss';
import {Header} from './pages/header/Header';
import {Main} from './pages/main/Main';
import {Footer} from './pages/footer/Footer';


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
