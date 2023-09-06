import React from 'react';
import {ProfilePageType, ProfileType, StatePropsType} from '../../../../redux/reduxStore/reduxStore';
import {Profile} from './Profile';
import {
    getProfile,
    getStatus,
    setUserProfile,
    updateStatus
} from '../../../../redux/reducers/profileReducer/profileReducer';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';

type MapStateToPropsType = ProfilePageType & {
    id: number | null
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void

}
type PathParamsType = {
    userId: string
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>


const mapStateToProps = (state: StatePropsType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        id: state.auth.data.id
    }
}

class ProfileContainer extends React.Component<PropsType> {
    getUserInfo() {
        let userId = this.props.match.params.userId
        if (!userId && this.props.id) {
            userId = String(this.props.id)
        }
        if (userId) {
            this.props.getProfile(userId)
            this.props.getStatus(userId)
        }
    }

    componentDidMount() {
        this.getUserInfo()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>) {
        if (prevProps.id !== this.props.id || prevProps.location.pathname !== this.props.location.pathname) {
            this.getUserInfo()
        }
    }

    render() {
        return <>
            <Profile profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        </>
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getProfile,
        getStatus,
        updateStatus,
        setUserProfile,
    }),
    withRouter,
)(ProfileContainer)


