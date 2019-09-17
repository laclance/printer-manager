import {combineReducers} from 'redux';
import printers from './printers';
import loading from './loading';
import error from './error';
import success from './success';

export default combineReducers({printers, loading, error, success});