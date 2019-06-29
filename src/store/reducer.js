import { combineReducers } from 'redux';
import { Types } from './actions.js';

function todos(state = [], action) {
    switch (action.type) {
        case Types.FETCH_TODOS:
            return action.todos;

        case Types.ADD_TODO:
            return [...state, action.data];

        case Types.TOGGLE_TODO:
            return [
                ...state.map(todo =>
                    todo.id === action.data.id ? action.data : todo
                ),
            ];

        case Types.DELETE_TODO:
            return [...state];

        default:
            return state;
    }
}

const todoApp = combineReducers({
    todos,
    // filter,
});

export default todoApp;
