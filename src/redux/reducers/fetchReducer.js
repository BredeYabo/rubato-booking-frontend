import {
    FETCH_BEGIN,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from '../actions/fetchActions';

const initialState = {
    items: [],
    loading: false,
    error: null
};


/*
    This is an example on how fetch-requests can be handled from an API in redux.
    This could be modified into handling fetching all or some artists from the backend.
*/
export function fetchReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loading: false,
                items: action.payload.products
            };

        case FETCH_FAILURE:
            // The request failed. It's done. So set loading to "false".
            // Save the error, so we can display it somewhere.
            // Since it failed, we don't have items to display anymore, so set `items` empty.
            //
            // This is all up to you and your app though:
            // maybe you want to keep the items around!
            // Do whatever seems right for your use case.
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };

        default:
            return state;
    }
}
