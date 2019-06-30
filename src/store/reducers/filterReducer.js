import { types, filters } from '../types.js';

function filter(state = filters.SHOW_ALL, action) {
    switch (action.type) {
        case types.SET_FILTER:
            return action.filter;

        default:
            return state;
    }
}

export default filter;
