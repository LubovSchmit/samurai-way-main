import React from 'react';
import {ProfilePageType, StatePropsType} from '../../../../redux/reduxStore/reduxStore';
import {Profile} from './Profile';
import {
    getProfile,
    getStatus, savePhoto,
    updateStatus
} from '../../../../redux/reducers/profileReducer/profileReducer';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';


type MapStateToPropsType = ProfilePageType & {
    id: number | null,
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
}
type PathParamsType = {
    userId: string
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>

const mapStateToProps = (state: StatePropsType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        id: state.auth.data.id,
        isAuth: state.auth.data.isAuth
    }
}

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.getUserInfo()
    }

    getUserInfo() {
        let userId = this.props.match.params.userId
        if (userId) {
            this.props.getProfile(userId)
            this.props.getStatus(userId)
        }
        if (!userId && this.props.id) {
            userId = String(this.props.id)
            this.props.getProfile(userId)
            this.props.getStatus(userId)
        }
        if (!userId && !this.props.id) {
            this.props.history.push('/login')
        }
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>) {
        if (prevProps.id !== this.props.id || prevProps.location.pathname !== this.props.location.pathname) {
            this.getUserInfo()
        }
    }

    render() {
        return <>
            <Profile isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
            />
        </>
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getProfile,
        getStatus,
        updateStatus,
        savePhoto
    }),
    withRouter,
)(ProfileContainer)


