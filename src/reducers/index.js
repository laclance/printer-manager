import {combineReducers} from 'redux';
import printers from './printers';
import loading from './loading';
import error from './error';

export default combineReducers({printers, loading, error});