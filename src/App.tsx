import React from 'react';
import style from './App.module.scss';
import {Main} from './pages/main/Main';
import {Footer} from './pages/footer/Footer';
import {Route} from 'react-router-dom';
import {HeaderContainer} from './pages/header/HeaderContainer';
import Login from './pages/login/Login';
import {connect} from 'react-redux';
import {initialiseApp} from './redux/reducers/appReducer/appReducer';
import {StatePropsType} from './redux/reduxStore/reduxStore';
import {Preloader} from './commun/preloader/Preloader';


type MapDispatchToPropsType = {
    initialiseApp: () => void
}
type PropsType = ReturnType<typeof mapStateToProps> & MapDispatchToPropsType

class App extends React.Component<PropsType> {
    componentDidMount() {
        this.props.initialiseApp()
    }

    render() {
        if (!this.props.initialised){
            return <Preloader/>
        }

        return (
            <div className={style.appBlock}>

                <HeaderContainer/>
                <Route path={'/login'} render={() => <Login/>}/>
                <Route path={'/'} render={() => <Main/>}/>
                <Footer/>

            </div>
        );
    }
}

const mapStateToProps = (state: StatePropsType)=> {
    return {initialised: state.app.initialised}

}


export default connect(mapStateToProps, {initialiseApp})(App)
/*
export default compose(
    withRouter,
    connect(mapStateToProps, {initialiseApp}))(App)
*/
