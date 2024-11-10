import { createStore, compose } from "redux";
import { rootReducer } from "../actions";

const initialState = {};
const enhancers = [];

if (process.env.NODE_ENV === "development") {
  const devToolExtensions = window.devToolExtensions;

  if (typeof devToolExtensions === "function") {
    enhancers.push(devToolExtensions());
  }
}

const composedEnhancers = compose(...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
