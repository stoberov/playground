import * as actionTypes from './../actions/actionTypes';

const weather = (state = [], action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.FETCH_WEATHER:
      const name = action.payload.then(item => {
        return item.data.results[0].email;
      });

      console.log(name);
      return [...state, name];

    default:
      return state;
  }
};

export default weather;
