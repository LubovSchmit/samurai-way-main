import React from 'react';
import {ProfileType, StatePropsType} from '../../../../redux/reduxStore/reduxStore';
import {Profile} from './Profile';
import {getProfile, setUserProfile} from '../../../../redux/reducers/profileReducer/profileReducer';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';


type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getProfile: (userId: string)=> void
}

type PathParamsType = {
    userId: string
}

type PropsType = ReturnType<typeof mapStateToProps> & MapDispatchToPropsType & RouteComponentProps<PathParamsType>

const mapStateToProps = (state: StatePropsType) => {
    return {
        profile: state.profilePage.profile
    }
}

class ProfileAPI extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getProfile(userId)
        /* profileAPI.getProfile(userId)
             .then(data => {
                 this.props.setUserProfile(data)
             })*/
    }

    render() {
        return <>
            <Profile {...this.props} profile={this.props.profile}/>
        </>

    }
}


let WithUrlDataContainerComponent = withRouter(ProfileAPI)

export const ProfileContainer = connect(mapStateToProps,
    {
        getProfile,
        setUserProfile,
    })(WithUrlDataContainerComponent)