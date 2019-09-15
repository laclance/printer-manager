import rootReducer from './reducers';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export default createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);