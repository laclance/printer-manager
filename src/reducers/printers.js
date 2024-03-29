import {
    FETCH_PRINTERS_SUCCESS,
    ADD_PRINTER_SUCCESS,
    UPDATE_PRINTER_SUCCESS,
    DELETE_PRINTER_SUCCESS,
    FETCH_PRINTERS_FAILED
} from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_PRINTERS_SUCCESS:
            return action.printers;
        case ADD_PRINTER_SUCCESS:
            return [...state, { ...action.printer }];
        case UPDATE_PRINTER_SUCCESS:
            return state.map((printer) => printer.id === action.printer.id ? action.printer : printer);
        case DELETE_PRINTER_SUCCESS:
            return state.filter((printer) => printer.id !== action.id);
        case FETCH_PRINTERS_FAILED:
            return action.printers || [];
        default:
            return state;
    }
};