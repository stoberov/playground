import * as actionTypes from './../actions/actionTypes';

const initialState = {
  superheroes: []
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WEATHER_SUCCESS:
      const data = action.payload.data;

      return Object.assign({}, state, {
        superheroes: data
      });

    default:
      return state;
  }
};

export default weather;
