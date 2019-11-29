import { combineReducers } from "redux";
import {fetchReducer} from "./fetchReducer";
import {countReducer} from './countReducer'
import {userReducer} from "./userReducer";
import {reducer as burgerMenu} from 'redux-burger-menu';

/*
    This reducer reduces reducers into one single reducer.
*/
export default combineReducers({
    burgerMenu:burgerMenu,
    fetchReducer: fetchReducer,
    counter: countReducer,
    user: userReducer
});