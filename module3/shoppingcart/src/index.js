import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import { cartReducer } from './redux/reducer';



let mystore=createStore(cartReducer);
ReactDOM.render(
  <Provider store={mystore}>

    <App />
  </Provider>
  ,
  document.getElementById('root')
);

