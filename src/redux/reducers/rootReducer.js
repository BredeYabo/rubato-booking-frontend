import { combineReducers } from "redux";
import {fetchReducer} from "./fetchReducer";
import {countReducer} from './countReducer'
/*
    This reducer reduces reducers into one single reducer.
*/

export default combineReducers({
    fetchReducer: fetchReducer,
    counter: countReducer
});