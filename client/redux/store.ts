import { createStore, combineReducers, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";

import projectReducer from "./reducers/projectReducer";
import errorReducer from "./reducers/errorReducer";

const combinedReducers = combineReducers({
  project: projectReducer,
  error: errorReducer,
});

const store: Store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;
