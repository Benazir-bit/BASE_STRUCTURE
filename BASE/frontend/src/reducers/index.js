import React from "react";
import { combineReducers } from "redux";
import auth from "./auth";
import alerts from "./alerts";
import loading from "./loading";
export default combineReducers({
  auth,
  alerts,
  loading,
});
