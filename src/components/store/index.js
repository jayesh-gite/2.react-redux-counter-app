import { createStore } from 'redux'
const INITIAL_STATE = { counter: 0 };
const counterReducer = (state = INITIAL_STATE, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }
    else if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }

    }
    else {
        return state;
    }
}

const store = createStore(counterReducer);

export default store;