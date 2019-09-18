import {FETCH_PRINTERS_REQUEST} from '../actions/types';

export default (state = false, {type}) => {
    if (type && type === FETCH_PRINTERS_REQUEST) {
        return true;
    }

    return state;
};