import reducer from '../loading';
import {
    FETCH_PRINTERS_REQUEST,
    FETCH_PRINTERS_SUCCESS,
} from '../../actions/types';

describe('loading reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(true)
    });

    it('should be true on FETCH_PRINTERS_REQUEST', () => {
        expect(
            reducer(false, {
                type: FETCH_PRINTERS_REQUEST
            })
        ).toEqual(true);
    });

    it('should be false on FETCH_PRINTERS_SUCCESS', () => {
        expect(
            reducer(true, {
                type: FETCH_PRINTERS_SUCCESS
            })
        ).toEqual(false);
    });
});