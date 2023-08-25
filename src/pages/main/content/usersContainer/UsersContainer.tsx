import React from 'react';
import {StatePropsType, UsersPageType} from '../../../../redux/reduxStore/reduxStore';
import {connect} from 'react-redux';
import {follow, getUsers, setCurrentPage, unfollow} from '../../../../redux/reducers/usersReducer/usersReducer';
import {Users} from './usersAPI/users/Users';
import {Preloader} from '../../../../commun/preloader/Preloader';
import {WithAuthRedirect} from '../../../../hoc/WithAuthRedirect';
import {compose} from 'redux';


type MapDispatchToPropsType = {
    setCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}
type PropsType = ReturnType<typeof mapStateToProps> & MapDispatchToPropsType

const mapStateToProps = (state: StatePropsType): UsersPageType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        inProgress: state.usersPage.inProgress
    }
}

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onClickPageChange(currentPage: number) {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
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
    WithAuthRedirect,
)(UsersContainer)





