import * as actionTypes from './../actions/actionTypes';

const initialState = {
  data: []
};

const superheroes = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SUPERHEROES_SUCCESS:
      const superheroes = action.payload.data;

      return Object.assign({}, state, {
        data: superheroes
      });

    default:
      return state;
  }
};

export default superheroes;
