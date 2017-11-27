import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counterReducer from './counter';
import superheroesReducer from './superheroes';

// Pool together all reducers responsible for different parts of the app
export default combineReducers({
  router: routerReducer, // Add to Redux store the reducer for routing on the 'router' key
  counter: counterReducer,
  superheroes: superheroesReducer
});
