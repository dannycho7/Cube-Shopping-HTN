import { combineReducers } from "redux";

import itemReducer from "./itemReducer";

module.exports = combineReducers({ item: itemReducer });