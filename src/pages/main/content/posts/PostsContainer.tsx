import React from 'react';
import {addPost} from '../../../../redux/reducers/postsReducer/postsReducer';
import {StatePropsType} from '../../../../redux/reduxStore/reduxStore';
import {Posts} from './Posts';
import {connect} from 'react-redux';
import {Preloader} from '../../../../commun/preloader/Preloader';
import {toggleIsFetching} from '../../../../redux/reducers/usersReducer/usersReducer';
import {profileAPI} from '../../../../api/api';

type MapDispatchToPropsType = {
    addPost: (newPostMessage: string) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type PropsType = ReturnType<typeof mapStateToProps> & MapDispatchToPropsType


export class PostsAPI extends React.Component<PropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        profileAPI.getProfile(this.props.userId)
        /*axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)*/
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.addPost(data)
            })
    }

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


const mapStateToProps = (state: StatePropsType) => {
    return {
        userId: state.profilePage.profile.userId,
        posts: state.postsPage.posts,
        postText: state.postsPage.newPostText,
        photo: state.profilePage.profile.photos.small,
        isFetching: state.usersPage.isFetching,
    }
}


export const PostsContainer = connect(mapStateToProps,
    {
        addPost,
        toggleIsFetching
    })(PostsAPI)