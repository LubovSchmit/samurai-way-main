import React from 'react';
import {addPostAC} from '../../../../redux/reducers/postsReducer/postsReducer';
import {ActionsType, DispatchType, PostType, StatePropsType} from '../../../../redux/reduxStore/reduxStore';
import {Posts} from './Posts';
import {connect} from 'react-redux';


/*type PropsType = {
    posts: Array<PostType>
    postText: string
    dispatch: (action: ActionsType) => void
}


export const PostsContainer = (props: PropsType) => {

    const addPost = (newPostMessage: string) => {
        props.dispatch(addPostAC(newPostMessage))
    }

    return <Posts posts={props.posts}
                  postText={props.postText}
                  addPost={addPost}
    />
};*/

const mapStateToProps = (state: StatePropsType) => {
    return {
        posts: state.postsPage.posts,
        postText: state.postsPage.newPostText
    }
}

const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addPost: (newPostMessage: string) => dispatch(addPostAC(newPostMessage))
    }
}



export const PostsContainer = connect (mapStateToProps, mapDispatchToProps)(Posts)