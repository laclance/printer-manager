export default (state = false, {type}) => {
    if (!type) {
        return state;
    }

    if (type.includes('REQUEST')) {
        return true;
    }

    if (type.includes('SUCCESS') || type.includes('FAILED')) {
        return false;
    }

    return state;
};