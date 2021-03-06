import { combineReducers } from 'redux';

import todos from './reducers/todoReducer.js';
import filter from './reducers/filterReducer.js';
import sorter from './reducers/sortReducer.js';
import errors from './reducers/errorReducer.js';

const todoApp = combineReducers({
    todos,
    filter,
    sorter,
    errors,
});

export default todoApp;
