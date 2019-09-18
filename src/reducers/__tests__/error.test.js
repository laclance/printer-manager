import reducer from '../error';
import {
    FETCH_PRINTERS_REQUEST,
    FETCH_PRINTERS_FAILED, REMOVE_ERROR
} from '../../actions/types';

describe('error reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(null)
    });

    it('should be null on FETCH_PRINTERS_REQUEST', () => {
        expect(
            reducer('some error', {
                type: FETCH_PRINTERS_REQUEST
            })
        ).toEqual(null);
    });

    it('should have error on FETCH_PRINTERS_FAILED', () => {
        expect(
            reducer(null, {
                type: FETCH_PRINTERS_FAILED,
                error: 'some error'
            })
        ).toEqual('some error');
    });

    it('should be null on REMOVE_ERROR', () => {
        expect(
            reducer('', {
                type: REMOVE_ERROR
            })
        ).toEqual(null);
    });
});