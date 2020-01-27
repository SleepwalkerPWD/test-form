import {
  VALUES_TO_SERVER,
} from '../actions/valuesToServer';


const initialState = {
  valuesToServer: [],
};

export default (state = initialState, action) => {
  console.log("Values_To_Server", action.payload)
  switch (action.type) {
    case VALUES_TO_SERVER:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};