// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import logger from 'redux-logger'
import MessageList from './containers/messagelist';


// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(rootReducer, applyMiddleware(logger))}>
      <App />
  </Provider>,
  document.getElementById('root')
);
