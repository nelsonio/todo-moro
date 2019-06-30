import { types } from '../types.js';

export const setFilter = filter => ({
    type: types.SET_FILTER,
    filter,
});

export const changeSort = sort => ({
    type: types.CHANGE_SORT,
    sort,
});

export const changeAscDesc = ad => ({
    type: types.ASC_DESC,
    ad,
});
