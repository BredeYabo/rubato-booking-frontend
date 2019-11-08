import { combineReducers } from "redux";
import {fetchReducer} from "./fetchReducer";
import {countReducer} from './countReducer'
import {userReducer} from "./userReducer";
/*
    This reducer reduces reducers into one single reducer.
*/

export default combineReducers({
    fetchReducer: fetchReducer,
    counter: countReducer,
    user: userReducer
});