import rootReducer from '../reducers/rootReducer'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

// thunk enables redux to handle API requests
export const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);