import React from 'react';
import style from './App.module.scss';
import {Header} from './pages/header/Header';
import {Main} from './pages/main/Main';
import {Footer} from './pages/footer/Footer';
import {Route} from 'react-router-dom';
import {ActionType, StatePropsType} from './redux/state';


type PropsType = {
    state: StatePropsType,
    dispatch: (action: ActionType) => void

}


function App(props: PropsType) {
    return (
        <div className={style.appBlock}>

            <Header/>
            <Route path={'/'} render={() => <Main
                state={props.state}
                dispatch={props.dispatch} />}/>
            <Footer/>

        </div>
    );
}


export default App;
