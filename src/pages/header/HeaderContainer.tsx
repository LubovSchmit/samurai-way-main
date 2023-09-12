import React from 'react';
import {StatePropsType, UserDataType} from '../../redux/reduxStore/reduxStore';
import {connect} from 'react-redux';
import {Header} from './Header';
import {authMe, AuthUserACType, logout, setAuthUserData} from '../../redux/reducers/authReducer/authReducer';



type MapDispatchToPropsType = {
    authMe: ()=> void
    logout: ()=> void
}

type PropsType = ReturnType<typeof mapStateToProps> & MapDispatchToPropsType


export class AuthAPI extends React.Component<PropsType> {
    componentDidMount() {
        this.props.authMe()
    }


    render() {
        return <>
            <Header login={this.props.login}
                    isAuth={this.props.isAuth}
                    email={this.props.email}
                    userId={this.props.userId}
                    logout={this.props.logout}
            />
        </>

    }
}

const mapStateToProps = (state: StatePropsType) => {
    return {
        isAuth: state.auth.data.isAuth,
        login: state.auth.data.login,
        email: state.auth.data.email,
        userId: state.auth.data.id
    }
}

export const HeaderContainer = connect(mapStateToProps,
    {
        authMe,
        logout
    })(AuthAPI)


