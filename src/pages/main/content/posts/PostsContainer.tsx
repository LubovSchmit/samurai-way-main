import React from 'react';
import {addPost} from '../../../../redux/reducers/postsReducer/postsReducer';
import {PostType, StatePropsType} from '../../../../redux/reduxStore/reduxStore';
import {Posts} from './Posts';
import {connect} from 'react-redux';
import {Preloader} from '../../../../commun/preloader/Preloader';
import {toggleIsFetching} from '../../../../redux/reducers/usersReducer/usersReducer';
import {WithAuthRedirect} from '../../../../hoc/WithAuthRedirect';
import {compose} from 'redux';

type MapDispatchToPropsType = {
    addPost: (newPostMessage: string) => void
    toggleIsFetching: (isFetching: boolean) => void
}
type MapStateToPropsType = {
    userId: string
    posts: Array<PostType>
    postText: string
    photo: string | null
    isFetching: boolean
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StatePropsType): MapStateToPropsType => {
    return {
        userId: state.profilePage.profile.userId,
        posts: state.postsPage.posts,
        postText: state.postsPage.newPostText,
        photo: state.profilePage.profile.photos.small,
        isFetching: state.usersPage.isFetching,
    }
}


class PostsContainer extends React.Component<PropsType> {
/*    componentDidMount() {
        this.props.toggleIsFetching(true)
        profileAPI.getProfile(this.props.userId)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.addPost(data)
            })
    }*/

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Posts {...this.props}
                   userId={this.props.userId}
                   posts={this.props.posts}
                   postText={this.props.postText}
                   photo={this.props.photo}
                   addPost={this.props.addPost}
            />
        </>

    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {addPost, toggleIsFetching}),
    WithAuthRedirect
)(PostsContainer)


