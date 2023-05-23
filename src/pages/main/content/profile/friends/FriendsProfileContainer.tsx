import React from 'react';
import {DispatchType, StatePropsType} from '../../../../../redux/reduxStore/reduxStore';
import {connect} from 'react-redux';
import {Friends} from './Friends';
import {deleteFriendAC} from '../../../../../redux/reducers/profileReducer/profileReducer';


const mapStateToProps = (state: StatePropsType) => {
    return {
        friends: state.profilePage.friends,
    }
}
const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        deleteFriend: (id: string) => dispatch(deleteFriendAC(id))
    }
}



export const FriendsProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)