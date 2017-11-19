import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import rootReducer from './../reducers';

const configureStore = (initialState = {}, history) => {
  // Create an Axios client to be used for middleware
  const client = axios.create({
    responseType: 'json'
    // baseURL: 'http://localhost:8080/api',
  });

  const middlewares = [
    thunk, // Allows you to write action creators that return a function instead of an action
    routerMiddleware(history), // Build the middleware for intercepting and dispatching navigation actions.
    axiosMiddleware(client) // Redux middleware for fetching data with axios HTTP client. Every action that has "payload.request" defined will be handled.
  ];

  const enhancers = [applyMiddleware(...middlewares)];

  // Enable Redux Dev Tools
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // Build the Redux store
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
