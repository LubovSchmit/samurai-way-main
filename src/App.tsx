import React from 'react';
import style from './App.module.scss';
import {Main} from './pages/main/Main';
import {Footer} from './pages/footer/Footer';
import {Route} from 'react-router-dom';
import {HeaderContainer} from './pages/header/HeaderContainer';


type PropsType = {
    /*state: StatePropsType,
    dispatch: (action: ActionsType) => void*/

}


function App(props: PropsType) {
    return (
        <div className={style.appBlock}>

            <HeaderContainer/>
            <Route path={'/'} render={() => <Main />}/>
            <Footer/>

        </div>
    );
}


export default App;
