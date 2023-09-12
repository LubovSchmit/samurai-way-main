import React from 'react';
import style from './App.module.scss';
import {Main} from './pages/main/Main';
import {Footer} from './pages/footer/Footer';
import {Route} from 'react-router-dom';
import {HeaderContainer} from './pages/header/HeaderContainer';
import Login from './pages/login/Login';






function App() {
    return (
        <div className={style.appBlock}>

            <HeaderContainer/>
            <Route path={'/login'} render={() => <Login />}/>
            <Route path={'/'} render={() => <Main />}/>
            <Footer/>



        </div>
    );
}


export default App;
