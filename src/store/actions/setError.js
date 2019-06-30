import { types } from '../types.js';

const setError = description => ({
    type: types.SET_ERROR,
    description,
});

export default setError;
