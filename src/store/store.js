import { createStore } from 'redux'

function cartReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
        return [...state, action.payload];
    }

    case 'REMOVE_FROM_CART': {
        return state.filter((item) => item.id !== action.payload.id);
    }
    default:
        return state;
  }
}

const store = createStore(cartReducer);

export default store;

// action is an object with a type and a payload