import { filters, sorting } from '../store/actions.js';

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

export const sortTodos = (todos, method, desc) => {
    if (todos !== null) {
        let sorted = [];
        switch (method) {
            case sorting.BY_DATE:
                sorted = todos.sort(
                    (t1, t2) => t1.createdDate - t2.createdDate
                );
                break;
            case sorting.BY_ABC:
                sorted = todos.sort((t1, t2) => {
                    if (t1.text > t2.text) return 1;
                    return -1;
                });
                break;
            default:
                sorted = [];
        }

        if (desc) sorted.reverse();

        return sorted;
    }
};

export const sortFilter = (todos, filter, method, desc) => {
    if (todos !== null) {
        const filtered = filterTodos(todos, filter);
        const sorted = sortTodos(filtered, method, desc);

        console.table(sorted);
        return sorted;
    }
};
