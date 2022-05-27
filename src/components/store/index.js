import { act } from '@testing-library/react';
import { createStore } from 'redux'
const INITIAL_STATE = { counter: 0, toggle: true };
const counterReducer = (state = INITIAL_STATE, action) => {
    if (action.type === 'increment') {
        return {
            toggle: state.toggle,
            counter: state.counter + 1
        }
    }
    else if (action.type === 'decrement') {
        return {
            toggle: state.toggle,
            counter: state.counter - 1
        }

    }
    else if (action.type === 'incrementby') {
        return {
            toggle: state.toggle,
            counter: state.counter + action.value
        }
    }
    else if (action.type === 'toggle') {
        return {
            toggle: !state.toggle,
            counter: state.counter
        }
    }
    else {
        return state;
    }
}

const store = createStore(counterReducer);

export default store;