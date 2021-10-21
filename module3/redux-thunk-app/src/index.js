import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import App from './App';
import { fetchReducer } from './redux/reducer';
import thunk from "redux-thunk";


let mystore=createStore(fetchReducer,applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={mystore}>

    <App />
  </Provider>
  ,
  document.getElementById('root')
);


