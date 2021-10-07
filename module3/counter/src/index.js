import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import App from './App';
import  { countReducer, loggedReducer } from './redux/reducer';

let rootReducer=combineReducers({
  count:countReducer,
  logged:loggedReducer
})
let mystore = createStore(rootReducer);
ReactDOM.render(
  <Provider store={mystore}>

    <App />
  </Provider>
  ,
  document.getElementById('root')
);


