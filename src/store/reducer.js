import { combineReducers } from 'redux';
import { types, filters, sorting } from './types.js';

function todos(state = null, action) {
    switch (action.type) {
        case types.FETCH_TODOS:
            return action.todos;

        case types.ADD_TODO:
            return [action.data, ...state];

        case types.TOGGLE_TODO:
            return [
                ...state.map(todo =>
                    todo.id === action.data.id ? action.data : todo
                ),
            ];

        case types.DELETE_TODO:
            return [...state.filter(todo => todo.id !== action.id)];

        case types.RENAME_TODO:
            return [
                ...state.map(todo =>
                    todo.id === action.id
                        ? { ...todo, text: action.text }
                        : todo
                ),
            ];

        default:
            return state;
    }
}

function filter(state = filters.SHOW_ALL, action) {
    switch (action.type) {
        case types.SET_FILTER:
            return action.filter;

        default:
            return state;
    }
}

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

const todoApp = combineReducers({
    todos,
    filter,
    sorter,
});

export default todoApp;
