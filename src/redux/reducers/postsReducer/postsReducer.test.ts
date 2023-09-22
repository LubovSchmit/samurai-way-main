import {addPost, deletePost, postsReducer} from './postsReducer';
import {PostsPageType} from '../../reduxStore/reduxStore';


let state: PostsPageType = {
    posts: [
        {
            userId: '0',
            newPostText: 'Yo',
            likesCount: 23
        },
        {
            userId: '1',
            newPostText: 'Its me',
            likesCount: 185
        },
        {
            userId: '2',
            newPostText: 'Bla bla',
            likesCount: 68
        },
    ],
}


test('length of posts array should be incremented', () => {
    let action = addPost('Hello hello')
    let newState = postsReducer(state, action)

    expect(newState.posts.length).toBe(4)
})

test('text of first element of posts array should be a new post text', () => {
    let action = addPost('Hello hello')
    let newState = postsReducer(state, action)

    expect(newState.posts[0].newPostText).toBe('Hello hello')
})

test('length of posts array should be decremented', ()=> {
    let action = deletePost('0')
    let newState = postsReducer(state, action)

    expect(newState.posts.length).toBe(2)
    expect(newState.posts[0].newPostText).toBe('Its me')
})

test('length of posts array should not change', ()=> {
    let action = deletePost('10')
    let newState = postsReducer(state, action)

    expect(newState.posts.length).toBe(3)
})