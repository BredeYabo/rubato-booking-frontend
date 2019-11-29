import { combineReducers } from "redux";
import {fetchReducer} from "./fetchReducer";
import {countReducer} from './countReducer'
import {userReducer} from "./userReducer";
import {reducer as burgerMenu} from 'redux-burger-menu';
import {loadingReducer} from "./loadingReducer";

/*
    This reducer reduces reducers into one single reducer.
*/
export default combineReducers({
    burgerMenu:burgerMenu,
    fetchReducer: fetchReducer,
    counter: countReducer,
    user: userReducer,
    loading: loadingReducer
});