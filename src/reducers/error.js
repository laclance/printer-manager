export default (state = null, {type, error}) => {
    if (!type) {
        return state;
    }

    if (type.includes('FAILED')) {
        return error;
    }

    if (type.includes('SUCCESS') || type.includes('REQUEST')) {
        return null;
    }

    return state;
};