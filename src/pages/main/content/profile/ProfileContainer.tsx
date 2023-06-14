import React from 'react';
import {ProfilePageType, ProfileType, StatePropsType} from '../../../../redux/reduxStore/reduxStore';
import axios from 'axios';
import {Preloader} from '../../../../commun/preloader/Preloader';
import {Profile} from './Profile';
import {setUserProfile} from '../../../../redux/reducers/profileReducer/profileReducer';
import {connect} from 'react-redux';
import {toggleIsFetching} from '../../../../redux/reducers/usersReducer/usersReducer';

/*type MapStateToProps = {
    isFetching: boolean ,
    profile: ProfileType | null,
}*/

type MapDispatchToProps = {
    toggleIsFetching: (isFetching: boolean) => void
    setUserProfile: (profile: ProfileType | null) => void
}

export type PropsType = ReturnType<typeof mapStateToProps> & MapDispatchToProps

export class ProfileAPI extends React.Component<PropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Profile {...this.props}/>
        </>

    }
}

const mapStateToProps = (state: StatePropsType) => {
    return {

        isFetching: state.usersPage.isFetching,
        profile: state.profilePage.profile
    }
}


export const ProfileContainer = connect(mapStateToProps,
    {
        setUserProfile,
        toggleIsFetching
    })(ProfileAPI)