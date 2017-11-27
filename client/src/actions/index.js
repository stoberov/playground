import * as actionTypes from './actionTypes';

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};

export const fetchSuperheroes = () => {
  // const url = 'https://randomuser.me/api/';
  const url = 'http://localhost:8080/api/superheroes';

  return {
    type: actionTypes.FETCH_SUPERHEROES,
    payload: {
      request: {
        url
      }
    }
  };
};