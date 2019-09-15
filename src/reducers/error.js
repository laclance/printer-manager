export default (state = null, action) => {
    if (action.type) {
        return action.type.includes('FAILED') ? action.error : null;
    }

    return state;
};