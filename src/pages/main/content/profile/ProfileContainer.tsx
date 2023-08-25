import React from 'react';
import {ProfilePageType, ProfileType, StatePropsType} from '../../../../redux/reduxStore/reduxStore';
import {Profile} from './Profile';
import {getProfile, setUserProfile} from '../../../../redux/reducers/profileReducer/profileReducer';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from '../../../../hoc/WithAuthRedirect';
import {compose} from 'redux';


type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getProfile: (userId: string) => void
}
type PathParamsType = {
    userId: string
}

type PropsType = ReturnType<typeof mapStateToProps> & MapDispatchToPropsType & RouteComponentProps<PathParamsType>


const mapStateToProps = (state: StatePropsType): ProfilePageType => {
    return {
        profile: state.profilePage.profile,
    }
}

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getProfile(userId)
    }

    render() {
        return <>
            <Profile {...this.props} profile={this.props.profile}/>
        </>
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getProfile,
        setUserProfile,
    }),
    withRouter,


)(ProfileContainer)


