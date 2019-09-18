import reducer from '../updated';
import {FETCH_PRINTERS_REQUEST} from '../../actions/types';

describe('updated reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(false)
    });

    it('should be true on FETCH_PRINTERS_REQUEST', () => {
        expect(
            reducer(false, {
                type: FETCH_PRINTERS_REQUEST
            })
        ).toEqual(true);
    });
});