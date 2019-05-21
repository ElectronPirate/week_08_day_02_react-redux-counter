import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
import * as serviceWorker from './serviceWorker';
import { createStore, compose } from 'redux';
import counterReducer from './reducers/counter_reducer';
import { Provider } from 'react-redux';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(counterReducer, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
  <Counter />
  </Provider>,
  document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
