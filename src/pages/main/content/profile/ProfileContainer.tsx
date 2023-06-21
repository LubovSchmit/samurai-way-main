import React from 'react';
import {ProfileType, StatePropsType} from '../../../../redux/reduxStore/reduxStore';
import {Preloader} from '../../../../commun/preloader/Preloader';
import {Profile} from './Profile';
import {setUserProfile} from '../../../../redux/reducers/profileReducer/profileReducer';
import {connect} from 'react-redux';
import {toggleIsFetching} from '../../../../redux/reducers/usersReducer/usersReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {authMe} from '../../../../api/api';


type MapDispatchToPropsType = {
    toggleIsFetching: (isFetching: boolean) => void
    setUserProfile: (profile: ProfileType) => void
}

type PathParamsType = {
    userId: string
}

type PropsType = ReturnType<typeof mapStateToProps> & MapDispatchToPropsType & RouteComponentProps<PathParamsType>


const mapStateToProps = (state: StatePropsType) => {
    return {
        isFetching: state.usersPage.isFetching,
        profile: state.profilePage.profile
    }
}



class ProfileAPI extends React.Component<PropsType> {
    componentDidMount() {

        let userId = this.props.match.params.userId

        this.props.toggleIsFetching(true)

        authMe(userId)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUserProfile(data)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Profile {...this.props} profile={this.props.profile}/>
        </>

    }
}


let WithUrlDataContainerComponent = withRouter(ProfileAPI)

export const ProfileContainer = connect(mapStateToProps,
    {
        setUserProfile,
        toggleIsFetching
    })(WithUrlDataContainerComponent)