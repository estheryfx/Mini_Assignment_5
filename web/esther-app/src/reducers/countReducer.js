const defaultCount = ["off","off","off","off"];

export default function countReducer(
    state = defaultCount, action
){
    if(action.type === 'boardClick') {
        if (state[action.need] === 'off') {
            state[action.need] = 'on';
        } else {
            state[action.need] = 'off';
        }
        return [...state];
    }
    return state;
}