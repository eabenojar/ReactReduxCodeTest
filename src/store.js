import { createStore, applyMiddleware } from "redux";
import mainReducer from "./reducers/index";
import thunk from "redux-thunk";

const initialState = {};

const store = createStore(mainReducer, initialState, applyMiddleware(thunk));

export default store;
