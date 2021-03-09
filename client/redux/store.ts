import { createStore, combineReducers, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";

import testReducer from "./testReducer"

const combinedReducers = combineReducers({
  test: testReducer
});

const store: Store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;