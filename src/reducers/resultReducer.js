import { ADD, SUB, MULTIPLY, DIVIDE } from "../actions/types";

const initialState = {
  result: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        result: action.payload
      };

    case SUB:
      console.log("***" + action.payload);
      return {
        result: action.payload
      };

    case MULTIPLY:
      return {
        result: action.payload
      };
    case DIVIDE:
      return {
        result: action.payload
      };
    default:
      return state;
  }
}
