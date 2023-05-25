import {DispatchType, StatePropsType, UserType} from '../../../../redux/reduxStore/reduxStore';
import {connect} from 'react-redux';
import {followUserAC, setUsersAC, unfollowUserAC} from '../../../../redux/reducers/usersReducer/usersReducer';
import {Users} from './Users';


const mapStateToProps = (state: StatePropsType) => {
    return {
        users: state.usersPage.users,
    }
}
const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users)),
        followUser: (userId: string) => dispatch(followUserAC(userId)),
        unfollowUser: (userId: string) => dispatch(unfollowUserAC(userId))
    }
}



export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)