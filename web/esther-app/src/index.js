import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducers';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Board';

const store = createStore(reducer);
ReactDOM.render(
  <Provider store = {store}>
    <Board />
  </Provider>,
  document.getElementById('root')
);

