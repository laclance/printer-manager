import {ADD_PRINTER_SUCCESS, UPDATE_PRINTER_SUCCESS} from '../actions/types';

export default (state = false, {type}) => {
    if (!type) {
        return state;
    }

    return type.includes(ADD_PRINTER_SUCCESS) || type.includes(UPDATE_PRINTER_SUCCESS);
};