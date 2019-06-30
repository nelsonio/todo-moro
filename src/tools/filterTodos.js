import { filters } from '../store/actions.js';

export const filterTodos = (todos, filter) => {
    if (todos !== null) {
        switch (filter) {
            case filters.SHOW_ACTIVE:
                return todos.filter(todo => !todo.completed);
            case filters.SHOW_COMPLETED:
                return todos.filter(todo => todo.completed);
            default:
                return todos;
        }
    }
};
