import React, {useState} from 'react';

import {addPostAC} from '../../../../redux/reducers/postsReducer/postsReducer';
import {ActionsType, PostType} from '../../../../redux/reduxStore/reduxStore';
import {Posts} from './Posts';


type PropsType = {
    posts: Array<PostType>
    postText: string
    dispatch: (action: ActionsType) => void
}


export const PostsContainer = (props: PropsType) => {
    let [newPostMessage, setNewPostMessage] = useState<string>('')

    const addPost = (newPostMessage: string) => {
        props.dispatch(addPostAC(newPostMessage))
        setNewPostMessage('')
    }


    return <Posts posts={props.posts}
                  postText={props.postText}
                  addPost={addPost}
                  newPostMessage={newPostMessage}
                  setNewPostMessage={setNewPostMessage}/>

};
