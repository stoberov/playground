// Actions
const FETCH_SUPERHEROES = 'playground/superheroes/FETCH_SUPERHEROES';
const FETCH_SUPERHEROES_SUCCESS = 'playground/superheroes/FETCH_SUPERHEROES_SUCCESS';
// const FETCH_SUPERHEROES_ERROR = 'playground/superheroes/FETCH_SUPERHEROES_ERROR';
// const DELETE_SUPERHERO = 'playground/superheroes/DELETE_SUPERHERO';
// const DELETE_SUPERHERO_SUCCESS = 'playground/superheroes/DELETE_SUPERHERO_SUCCESS';
// const DELETE_SUPERHERO_ERROR = 'playground/superheroes/DELETE_SUPERHERO_ERROR';

// Reducer
const initialState = {
    data: []
};

export default function superheroes(state = initialState, action = {}) {
    switch (action.type) {
        case FETCH_SUPERHEROES_SUCCESS:
            const superheroes = action.payload.data;

            return Object.assign({}, state, {
                data: superheroes
            });

        default:
            return state;
    }
};

// Action Creators
export const fetchSuperheroes = () => {
    const url = 'http://localhost:8080/api/superheroes';

    return {
        type: FETCH_SUPERHEROES,
        payload: {
            request: {
                url
            }
        }
    };
};