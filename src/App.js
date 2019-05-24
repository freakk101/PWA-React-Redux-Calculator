import React, { useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { add, sub, multiply, divide } from "./actions";

function ReduxWrapper(props) {
  const [val, setVal] = useState({ val1: "", val2: "" });
  const [isActive, setActive] = useState(false);

  const HandleOnChange = e => {
    setVal({
      ...val,
      [e.target.name]: e.target.value
    });
  };

  const add = (value1, value2) => {
    let currentStatus = isActive;
    setActive(!currentStatus);
    console.log(`value${value1} valueII${value2}`);
    props.add(value1, value2);
  };

  const sub = (value1, value2) => {
    let currentStatus = isActive;
    setActive(!currentStatus);
    if ((value1 !== "") & (value2 !== "")) {
      props.sub(value1, value2);
    }
  };

  const mul = (value1, value2) => {
    let currentStatus = isActive;
    setActive(!currentStatus);
    if ((value1 !== "") & (value2 !== "")) {
      props.multiply(value1, value2);
    }
  };

  const divi = (value1, value2) => {
    let currentStatus = isActive;
    setActive(!currentStatus);
    if ((value1 !== "") & (value2 !== "")) {
      props.divide(value1, value2);
    }
  };
  return (
    <div>
      <div className="header">
        <span>Calculator</span>
      </div>

      <div className="field">
        <div className="group">
          <input type="text" name="val1" onChange={HandleOnChange} required />
          <span className="highlight" />
          <label>Enter Value 1</label>
        </div>

        <div className="group">
          <input type="text" name="val2" onChange={HandleOnChange} required />
          <span className="highlight" />
          <label>Enter Value 2</label>
        </div>
      </div>

      <React.Fragment>
        <div className="functions">
          <div className="op_bg" onClick={() => add(val.val1, val.val2)}>
            <div className="symbol">
              <span className="sign">+</span>
              <span className="operator">Add</span>
            </div>
          </div>

          <div className="op_bg" onClick={() => sub(val.val1, val.val2)}>
            <div className="symbol">
              <span className="sign">-</span>
              <span className="operator">Substract</span>
            </div>
          </div>
        </div>

        <div className="functions">
          <div className="op_bg" onClick={() => mul(val.val1, val.val2)}>
            <div className="symbol">
              <span className="sign">x</span>
              <span className="operator">Multiply</span>
            </div>
          </div>

          <div className="op_bg" onClick={() => divi(val.val1, val.val2)}>
            <div className="symbol">
              <span className="sign">÷</span>
              <span className="operator">Divide</span>
            </div>
          </div>
        </div>
      </React.Fragment>

      <div className="result">
        <span className="result_title">Result</span>
        <span className="result_value">
          {props.result.result.toLocaleString(undefined, {
            maximumFractionDigits: 2
          })}
        </span>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  result: state.result
});

export default connect(
  mapStateToProps,
  { add, sub, multiply, divide }
)(ReduxWrapper);
