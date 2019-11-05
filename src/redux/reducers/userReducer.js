import { LOGIN, LOGOUT } from "../actions/userActions.js"

export function userReducer (state = { }, action) {
    switch (action.type) {
        case LOGIN:
            const { username } = action.payload;
            return {
                ...state,
               username
            };

        case LOGOUT:
            return {
                ...state,
                username: null
            };
        default:
            return state;
    }
}