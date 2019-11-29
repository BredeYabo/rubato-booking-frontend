import { STOP_LOADING, START_LOADING } from "../actions/loadingActions.js"

const initialState = {
    isLoading: false,
};

export function loadingReducer (state = initialState, action) {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                isLoading: true,
            };

        case STOP_LOADING:
            return {
                ...state,
                isLoading: false
            };

        default:
            return state;
    }
}

export const getLoaded = state => state.loading;
