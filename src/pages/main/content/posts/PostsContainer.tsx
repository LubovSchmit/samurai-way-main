import React from 'react';
import {addPost} from '../../../../redux/reducers/postsReducer/postsReducer';
import {PostType, StatePropsType} from '../../../../redux/reduxStore/reduxStore';
import {Posts} from './Posts';
import {connect} from 'react-redux';
import {Preloader} from '../../../../commun/preloader/Preloader';
import {toggleIsFetching} from '../../../../redux/reducers/usersReducer/usersReducer';
import {WithAuthRedirect} from '../../../../hoc/WithAuthRedirect';
import {compose} from 'redux';
import {RouteComponentProps} from 'react-router-dom';

type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
    toggleIsFetching: (isFetching: boolean) => void
}
type MapStateToPropsType = {
    userId: string
    posts: Array<PostType>
    newPostText: string | undefined
    isFetching: boolean
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StatePropsType): MapStateToPropsType => {
    return {
        userId: state.profilePage.profile.userId,
        posts: state.postsPage.posts,
        newPostText: state.postsPage.newPostText,
        isFetching: state.usersPage.isFetching,
    }
}


class PostsContainer extends React.Component<PropsType> {

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Posts {...this.props}
                   userId={this.props.userId}
                   posts={this.props.posts}
                   newPostText={this.props.newPostText}
                   addPost={this.props.addPost}
            />
        </>

    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {addPost, toggleIsFetching}),
    WithAuthRedirect
)(PostsContainer)


