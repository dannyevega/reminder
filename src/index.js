import React from 'react';
import ReactDOM from 'react-dom';
import Reminder from './components/Reminder';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

const main = document.getElementById('main');

ReactDOM.render(
  <Provider store={store}>
    <Reminder />
  </Provider>,
  main
);