import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './../reducers';

const configureStore = (initialState = {}, history) => {
  const middlewares = [
    thunk, // Allows you to write action creators that return a function instead of an action
    routerMiddleware(history) // Build the middleware for intercepting and dispatching navigation actions. Particularly useful for asynchronous actions, such as API calls.
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

  return store;
};

export default configureStore;
