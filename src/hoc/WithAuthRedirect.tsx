import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {StatePropsType} from '../redux/reduxStore/reduxStore';
import {connect} from 'react-redux';


type MapStateToPropsType = {
    isAuth: boolean
}

let mapStateToProps = (state: StatePropsType): MapStateToPropsType => {
    return {
        isAuth: state.auth.data.isAuth
    }

}

export function WithAuthRedirect <T>(Component: ComponentType<T>)  {

        const RedirectComponent = (props: any) => {

    let {isAuth, ...restProps} = props

    if(!isAuth) return <Redirect to={"/login"}/>
            return <Component {...restProps as T}/>
        }


    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
};
