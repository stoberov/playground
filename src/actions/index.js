import axios from 'axios';

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

export const fetchWeather = () => {
  const url = 'https://randomuser.me/api/';

  const request = axios.get(url);

  return {
    type: actionTypes.FETCH_WEATHER,
    payload: request
  };
};
