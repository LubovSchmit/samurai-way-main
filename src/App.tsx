import React from 'react';
import style from './App.module.scss';
import {Header} from './pages/header/Header';
import {Main} from './pages/main/Main';
import {Footer} from './pages/footer/Footer';
import {Route} from 'react-router-dom';
import {ActionsType, StatePropsType} from './redux/reduxStore/reduxStore';



type PropsType = {
    /*state: StatePropsType,
    dispatch: (action: ActionsType) => void*/

}


function App(props: PropsType) {
    return (
        <div className={style.appBlock}>

            <Header/>
            <Route path={'/'} render={() => <Main />}/>
            <Footer/>

        </div>
    );
}


export default App;
