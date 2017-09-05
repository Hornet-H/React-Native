import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from "./RootReducer";

let middlewares = [];

middlewares.push(logger);
middlewares.push(thunk);

/* global __DEV__  */
// if (__DEV__) {
// }

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(RootReducer, initialState);
}
