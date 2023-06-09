import {DispatchType, StatePropsType, UserType} from '../../../../redux/reduxStore/reduxStore';
import {connect} from 'react-redux';
import {
    followUserAC,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowUserAC
} from '../../../../redux/reducers/usersReducer/usersReducer';
import {UsersAPI} from './usersAPI/UsersAPI';


const mapStateToProps = (state: StatePropsType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
    }
}
const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users)),
        setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCountAC(totalCount)),
        followUser: (userId: string) => dispatch(followUserAC(userId)),
        unfollowUser: (userId: string) => dispatch(unfollowUserAC(userId)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage))
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)