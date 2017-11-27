// Actions
const INCREMENT = 'playground/counter/INCREMENT';
const DECREMENT = 'playground/counter/DECREMENT';

// Reducer
const initialState = {
    count: 0
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            };
        case DECREMENT:
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
};


// Action Creators
export const increment = () => {
    return {
        type: INCREMENT
    };
};

export const decrement = () => {
    return {
        type: DECREMENT
    };
};