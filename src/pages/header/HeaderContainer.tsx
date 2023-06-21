import React from 'react';
import axios from 'axios';
import {Preloader} from '../../commun/preloader/Preloader';
import {StatePropsType, UserDataType} from '../../redux/reduxStore/reduxStore';
import {connect} from 'react-redux';
import {toggleIsFetching} from '../../redux/reducers/usersReducer/usersReducer';
import {Header} from './Header';
import {setAuthUserData} from '../../redux/reducers/aythReducer/authReducer';


type MapDispatchToPropsType = {
    toggleIsFetching: (isFetching: boolean) => void
    setAuthUserData: (data: UserDataType) => void
}

type PropsType = ReturnType<typeof mapStateToProps> & MapDispatchToPropsType


export class AuthAPI extends React.Component<PropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false)

                if (response.data.resultCode === 0) {

                    this.props.setAuthUserData(response.data.data)
                }

            })
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Header login={this.props.login} isAuth={this.props.isAuth} email={this.props.email} userId={this.props.userId}/>
        </>

    }
}


const mapStateToProps = (state: StatePropsType) => {
    return {
        isFetching: state.usersPage.isFetching,
        isAuth: state.auth.data.isAuth,
        login: state.auth.data.login,
        email: state.auth.data.email,
        userId: state.auth.data.id
    }
}


export const HeaderContainer = connect(mapStateToProps,
    {
        toggleIsFetching,
        setAuthUserData
    })(AuthAPI)


