import { ADD, SUB, MULTIPLY, DIVIDE } from "./types";

export const add = (value1, value2) => dispatch => {
  let add = (val1, val2) => {
    return Number(val1) + Number(val2);
  };

  let addResult = add(value1, value2).toFixed(2);
  console.log(addResult);
  dispatch({
    type: ADD,
    payload: addResult
  });
};

export const sub = (value1, value2) => dispatch => {
  console.log(`>>>${value1} >>>${value2}`);
  let substract = (val1, val2) => {
    return Number(val1) - Number(val2);
  };

  let subResult = substract(value1, value2).toFixed(2);
  console.log(subResult);

  dispatch({
    type: SUB,
    payload: subResult
  });
};

export const multiply = (value1, value2) => dispatch => {
  let mul = (val1, val2) => {
    return Number(val1) * Number(val2);
  };

  let mulResult = mul(value1, value2).toFixed(2);

  dispatch({
    type: MULTIPLY,
    payload: mulResult
  });
};
export const divide = (value1, value2) => dispatch => {
  let divi = (val1, val2) => {
    if (val1 === 0 && val2 === 0) {
      return Number(0);
    } else {
      return Number(val1) / Number(val2);
    }
  };

  let diviResult = divi(value1, value2).toFixed(2);

  dispatch({
    type: DIVIDE,
    payload: diviResult
  });
};
