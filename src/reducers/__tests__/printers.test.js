import reducer from '../printers';
import {
    FETCH_PRINTERS_SUCCESS,
    ADD_PRINTER_SUCCESS,
    UPDATE_PRINTER_SUCCESS,
    DELETE_PRINTER_SUCCESS
} from '../../actions/types';

const dummyPrinters = [{ 'id': 1, 'name': 'Test printer', 'ip_address': '1.1.1.1', 'status': 'inactive' }];

describe('printers reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual([])
    });

    it('should add printers on FETCH_PRINTERS_SUCCESS', () => {
        expect(
            reducer([], {
                type: FETCH_PRINTERS_SUCCESS,
                printers: dummyPrinters
            })
        ).toEqual(dummyPrinters);
    });

    it('should add printer on ADD_PRINTER_SUCCESS', () => {
        expect(
            reducer([], {
                type: ADD_PRINTER_SUCCESS,
                printer: dummyPrinters[0]
            })
        ).toEqual(dummyPrinters);
    });

    it('should update printer on UPDATE_PRINTER_SUCCESS', () => {
        const updatedPrinter = { ...dummyPrinters[0], name: 'New Name' };
        expect(
            reducer(dummyPrinters, {
                type: UPDATE_PRINTER_SUCCESS,
                printer: updatedPrinter
            })
        ).toEqual([updatedPrinter]);
    });

    it('should delete printer on DELETE_PRINTER_SUCCESS', () => {
        expect(
            reducer(dummyPrinters, {
                type: DELETE_PRINTER_SUCCESS,
                id: dummyPrinters[0].id
            })
        ).toEqual([]);
    });
});