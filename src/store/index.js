
import { createStore } from 'redux';

const initialState = {
  result: 1,
  lastValues: []
}

export const reducer = ( state = initialState, action ) =>  {
  switch (action.type) {
    case "TOGGLE_ACCORDION":
      state = {
        ...state,
        result: action.payload
      }
      break;
    case "CLOSE_ACCORDION":
      state= {
        ...state,
        result: 0
      }
      break;
    default:
      break;
  }
  return state;
};

export const store = createStore(reducer);

// store.subscribe( () => {
//   console.log("Store updated!", store.getState());
// });

// store.dispatch({
//   type: "ADD",
//   payload: 100
// });

// store.dispatch({
//   type: "ADD",
//   payload: 200
// });

// store.dispatch({
//   type: "SUBSTRACT",
//   payload: 70
// });