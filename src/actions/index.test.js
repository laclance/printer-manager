import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {API_URL} from '../api';
import {addPrinter, deletePrinter, fetchPrinters, updatePrinter} from './index';
import {
    ADD_PRINTER_REQUEST,
    ADD_PRINTER_SUCCESS,
    DELETE_PRINTER_REQUEST,
    DELETE_PRINTER_SUCCESS,
    FETCH_PRINTERS_REQUEST,
    FETCH_PRINTERS_SUCCESS,
    UPDATE_PRINTER_REQUEST,
    UPDATE_PRINTER_SUCCESS
} from './types';

const mockStore = configureMockStore([thunk]);

const initialState = { printers: { printers: [] } };
const dummyPrinters = [{ 'id': 1, 'name': 'Test printer', 'ip_address': '1.1.1.1', 'status': 'inactive' }];

describe('printer actions', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('creates FETCH_PRINTERS_SUCCESS with printers when fetching printers is done', () => {
        fetchMock.getOnce(`${API_URL}/printers`, {
            body: dummyPrinters,
            headers: { 'content-type': 'application/json' }
        });

        const expectedActions = [
            { type: FETCH_PRINTERS_REQUEST },
            { type: FETCH_PRINTERS_SUCCESS, printers: dummyPrinters }
        ];

        const store = mockStore(initialState);

        store.dispatch(fetchPrinters()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates ADD_PRINTER_SUCCESS with printer when add printer is done', () => {
        fetchMock.postOnce(`${API_URL}/printers`, {
            body: dummyPrinters[0],
            headers: { 'content-type': 'application/json' }
        });

        const expectedActions = [
            { type: ADD_PRINTER_REQUEST },
            { type: ADD_PRINTER_SUCCESS, printer: dummyPrinters[0] }
        ];

        const store = mockStore(initialState);

        store.dispatch(addPrinter(dummyPrinters[0])).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates UPDATE_PRINTER_SUCCESS with printer when update printer is done', () => {
        const updatedPrinter = { ...dummyPrinters[0], name: 'New Name' };

        fetchMock.putOnce(`${API_URL}/printers/${dummyPrinters[0].id}`, {
            body: updatedPrinter,
            headers: { 'content-type': 'application/json' }
        });

        const expectedActions = [
            { type: UPDATE_PRINTER_REQUEST },
            { type: UPDATE_PRINTER_SUCCESS, printer: updatedPrinter }
        ];

        const store = mockStore(initialState);

        store.dispatch(updatePrinter(dummyPrinters[0])).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates DELETE_PRINTER_SUCCESS with id when delete printer is done', () => {
        fetchMock.deleteOnce(`${API_URL}/printers/${dummyPrinters[0].id}`, {
            body: dummyPrinters[0].id,
            headers: { 'content-type': 'application/json' }
        });

        const expectedActions = [
            { type: DELETE_PRINTER_REQUEST },
            { type: DELETE_PRINTER_SUCCESS, id: dummyPrinters[0].id }
        ];

        const store = mockStore(initialState);

        store.dispatch(deletePrinter(dummyPrinters[0].id)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});