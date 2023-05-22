import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {StatePropsType, store} from './redux/reduxStore/reduxStore';
import {Provider} from 'react-redux';


export let rerenderEntireTree = (state: StatePropsType) => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App state={state}
                     dispatch={store.dispatch.bind(store)}
                />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})