import React from 'react';
import store, {StatePropsType} from './redux/state';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';




export let rerenderEntireTree = (state: StatePropsType) =>{
    ReactDOM.render(
        <BrowserRouter>

            <App state={state}
                 addPost = {store.addPost.bind(store)}/>

        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)