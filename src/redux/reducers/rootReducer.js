import { combineReducers } from "redux";
import {fetchReducer} from "./fetchReducer";
import {countReducer} from './countReducer'
import {userReducer} from "./userReducer";
import {loadingReducer} from "./loadingReducer";

/*
    This reducer reduces reducers into one single reducer.
*/

export default combineReducers({
    fetchReducer: fetchReducer,
    counter: countReducer,
    user: userReducer,
    loading: loadingReducer
});