import { combineReducers } from "redux";

import resultReducer from "./resultReducer";

export default combineReducers({ result: resultReducer });
