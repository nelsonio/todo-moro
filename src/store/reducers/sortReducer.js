import { types, sorting } from '../types.js';

function sorter(state = { type: sorting.BY_DATE, desc: true }, action) {
    switch (action.type) {
        case types.CHANGE_SORT:
            return {
                ...state,
                type: action.sort,
            };

        case types.ASC_DESC:
            return {
                ...state,
                desc: action.ad,
            };

        default:
            return state;
    }
}

export default sorter;
