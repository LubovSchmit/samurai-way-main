import React from 'react';
import {StatePropsType, UserDataType} from '../../redux/reduxStore/reduxStore';
import {connect} from 'react-redux';
import {Header} from './Header';
import {setAuthUserData} from '../../redux/reducers/aythReducer/authReducer';
import {authMe} from '../../api/api';


type MapDispatchToPropsType = {
    setAuthUserData: (data: UserDataType) => void
}

type PropsType = ReturnType<typeof mapStateToProps> & MapDispatchToPropsType


export class AuthAPI extends React.Component<PropsType> {
    componentDidMount() {
       /* axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })*/

        authMe().then(data=> {
                if (data.resultCode === 0) {
                    this.props.setAuthUserData(data.data)
                }
            })
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
        setAuthUserData
    })(AuthAPI)


