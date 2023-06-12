import {StatePropsType} from '../../../../../redux/reduxStore/reduxStore';
import {connect} from 'react-redux';
import {Friends} from './Friends';
import {deleteFriend} from '../../../../../redux/reducers/profileReducer/profileReducer';


const mapStateToProps = (state: StatePropsType) => {
    return {
        friends: state.profilePage.friends,
    }
}




export const FriendsProfileContainer = connect(mapStateToProps,
    {deleteFriend})
(Friends)