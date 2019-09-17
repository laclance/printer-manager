import {REMOVE_ERROR} from '../actions/types';

export default (state = null, {type, error}) => {
    if (!type) {
        return state;
    }

    if (type.includes('FAILED')) {
        return error;
    }

    if (type.includes('SUCCESS') || type.includes('REQUEST') || type === REMOVE_ERROR) {
        return null;
    }

    return state;
};