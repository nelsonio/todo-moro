import { types } from '../types.js';

function errors(state = { any: false, description: '' }, action) {
    switch (action.type) {
        case types.SET_ERROR:
            return {
                any: true,
                description: action.description,
            };

        default:
            return state;
    }
}

export default errors;
