export default (state = true, action) => {
    if (action.type){
        return action.type.includes('REQUEST');
    }

    return state;
};