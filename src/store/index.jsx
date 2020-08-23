import { createStore } from 'redux';

const initialState = {
  idOpen: 0,
  services: [],
}

export const reducer = ( state = initialState, action ) =>  {
  switch (action.type) {
    case "STORE_DATA":
      state = {
        ...state,
        services: [...state.services, action.payload]
      }
      break;
    case "TOGGLE_ACCORDION":
      state= {
        ...state,
        idOpen: action.payload
      }
      break;
    default:
      break;
  }
  return state;
};

export const store = createStore(reducer);
