import {apiRequest} from '../api';
import {
    FETCH_PRINTERS_FAILED, FETCH_PRINTERS_REQUEST, FETCH_PRINTERS_SUCCESS,
    ADD_PRINTER_FAILED, ADD_PRINTER_REQUEST, ADD_PRINTER_SUCCESS,
    UPDATE_PRINTER_FAILED, UPDATE_PRINTER_REQUEST, UPDATE_PRINTER_SUCCESS,
    DELETE_PRINTER_FAILED, DELETE_PRINTER_REQUEST, DELETE_PRINTER_SUCCESS
} from './types';

const ip_address_regex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;

export const fetchPrinters = () => (dispatch) => {
    dispatch({ type: FETCH_PRINTERS_REQUEST });

    apiRequest('printers').then(
        printers => {
            dispatch({ type: FETCH_PRINTERS_SUCCESS, printers });
        },
        error => {
            dispatch({ type: FETCH_PRINTERS_FAILED, error });
        }
    );
};

export const addPrinter = (data) => (dispatch) => {
    if (!ip_address_regex.test(data.ip_address)) {
        dispatch({ type: ADD_PRINTER_FAILED, error: 'Invalid IP Address' });
    }
    else {
        dispatch({ type: ADD_PRINTER_REQUEST });

        apiRequest('printers', 'POST', data).then(
            printer => {
                dispatch({ type: ADD_PRINTER_SUCCESS, printer });
            },
            error => {
                dispatch({ type: ADD_PRINTER_FAILED, error });
            }
        );
    }
};

export const updatePrinter = (data) => (dispatch) => {
    if (!ip_address_regex.test(data.ip_address)) {
        dispatch({ type: ADD_PRINTER_FAILED, error: 'Invalid IP Address' });
    }
    else {
        dispatch({ type: UPDATE_PRINTER_REQUEST });

        apiRequest(`printers/${data.id}`, 'PUT', data).then(
            printer => {
                dispatch({ type: UPDATE_PRINTER_SUCCESS, printer });
            },
            error => {
                dispatch({ type: UPDATE_PRINTER_FAILED, error });
            }
        );
    }
};

export const deletePrinter = (id) => (dispatch) => {
    dispatch({ type: DELETE_PRINTER_REQUEST });

    apiRequest(`printers/${id}`, 'DELETE').then(
        () => {
            dispatch({ type: DELETE_PRINTER_SUCCESS, id });
        },
        error => {
            dispatch({ type: DELETE_PRINTER_FAILED, error });
        }
    );
};