import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import { reducer } from './redux/reducer';
import { rootReducer } from './redux/rootReducer';


let mystore = createStore(rootReducer);

ReactDOM.render(
    <Provider store={mystore}>
        <App />
    </Provider>

    , document.getElementById('root'));
