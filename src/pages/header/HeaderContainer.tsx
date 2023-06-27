import React from 'react';
import {StatePropsType, UserDataType} from '../../redux/reduxStore/reduxStore';
import {connect} from 'react-redux';
import {Header} from './Header';
import {authMe, setAuthUserData} from '../../redux/reducers/authReducer/authReducer';



type MapDispatchToPropsType = {
    setAuthUserData: (data: UserDataType) => void
    authMe: ()=> void
}

type PropsType = ReturnType<typeof mapStateToProps> & MapDispatchToPropsType


export class AuthAPI extends React.Component<PropsType> {
    componentDidMount() {
        this.props.authMe()
        /*authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                this.props.setAuthUserData(data.data)
            }
        })*/
    }


    render() {
        return <>
            <Header login={this.props.login}
                    isAuth={this.props.isAuth}
                    email={this.props.email}
                    userId={this.props.userId}/>
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
        setAuthUserData,
        authMe,
    })(AuthAPI)


