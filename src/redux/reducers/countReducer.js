// simple reducer to understand syntax, will be removed over time
import {DECREMENT, INCREMENT} from "../actions/countActions";

export function countReducer(state = {count:0}, action) {
    console.log('countReducer:', state, action);

    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
}