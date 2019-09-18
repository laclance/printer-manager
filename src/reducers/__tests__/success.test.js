import reducer from '../success';
import {
    ADD_PRINTER_SUCCESS,
    UPDATE_PRINTER_SUCCESS
} from '../../actions/types';

describe('success reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(false)
    });

    it('should be true on ADD_PRINTER_SUCCESS', () => {
        expect(
            reducer(false, {
                type: ADD_PRINTER_SUCCESS
            })
        ).toEqual(true);
    });

    it('should be true on UPDATE_PRINTER_SUCCESS', () => {
        expect(
            reducer(false, {
                type: UPDATE_PRINTER_SUCCESS
            })
        ).toEqual(true);
    });

    it('should be false on unknown action', () => {
        expect(
            reducer(true, {
                type: 'UNKNOWN_ACTION'
            })
        ).toEqual(false);
    });
});