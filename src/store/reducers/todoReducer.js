import { types } from '../types.js';

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

export default todos;
