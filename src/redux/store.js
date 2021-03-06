import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {rootReducer} from "./Reducer/index";


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
