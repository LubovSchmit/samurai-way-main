import React from 'react';
import {StatePropsType, UsersPageType} from '../../../../redux/reduxStore/reduxStore';
import {connect} from 'react-redux';
import {follow, getUsers, setCurrentPage, unfollow} from '../../../../redux/reducers/usersReducer/usersReducer';
import {Users} from './usersAPI/users/Users';
import {Preloader} from '../../../../commun/preloader/Preloader';
import {compose} from 'redux';
import {
    getCurrentPageSelector, getInProgressSelector, getIsFetchingSelector,
    getPageSizeSelector,
    getTotalCountSelector,
    getUsersSuperSelector
} from '../../../../redux/selectors/usersSelectors/usersSelectors';


type MapDispatchToPropsType = {
    setCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}
type PropsType = ReturnType<typeof mapStateToProps> & MapDispatchToPropsType

const mapStateToProps = (state: StatePropsType): UsersPageType => {

    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSizeSelector(state),
        totalCount: getTotalCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        inProgress: getInProgressSelector(state)
    }
}
class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }
    onClickPageChange(currentPage: number) {
        const {pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
        this.props.setCurrentPage(currentPage);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalCount={this.props.totalCount}
                   currentPage={this.props.currentPage}
                   inProgress={this.props.inProgress}
                   onClickPageChange={this.onClickPageChange.bind(this)}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        </>
    }
}



export default compose<React.ComponentType>(
    connect(mapStateToProps,{
        setCurrentPage,
        follow,
        unfollow,
        getUsers,
    }),

)(UsersContainer)





