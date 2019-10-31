import { LOGIN, LOGOUT } from "../actions/userActions.js"

export function userReducer (state = { }, action) {
    switch (action.type) {
        case LOGIN:
            console.log(action.payload);
            const { username } = action.payload;
            return {
                ...state,
               username
            };

        case LOGOUT:
            return {
                ...state
            }
        default:
            return state;
    }
}