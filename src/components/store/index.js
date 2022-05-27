import { createStore } from 'redux'
const INITIAL_STATE = { counter: 0 };
const counterReducer = (state = INITIAL_STATE, action) => {
    if (action.type === 'inc') {
        return {
            counter: state.counter++
        }
    }
    else if (action.type === 'dec') {
        return {
            counter: state.counter--
        }

    }
    else {
        return state;
    }
}

const store = createStore(counterReducer);

export default store;