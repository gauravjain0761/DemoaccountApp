import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./commonReducer";
import { USER_LOGOUT } from "../actions/types";

const middleware = [thunk];

const reducers = combineReducers({
  common: commonReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === USER_LOGOUT) {
    return reducers(undefined, action);
  }
  return reducers(state, action);
};

const store = configureStore({ reducer: rootReducer, middleware });

export default store;
