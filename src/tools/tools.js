import { filters, sorting } from '../store/types.js';

const filterTodos = (todos, filter) => {
    switch (filter) {
        case filters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        case filters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
};

const sortTodos = (todos, method, desc) => {
    let sorted = [];
    switch (method) {
        case sorting.BY_DATE:
            sorted = [...todos].sort(
                (t1, t2) => t1.createdDate - t2.createdDate
            );
            break;
        case sorting.BY_ABC:
            sorted = [...todos].sort((t1, t2) => {
                if (t1.text > t2.text) return 1;
                return -1;
            });
            break;
        default:
            sorted = [];
    }

    if (desc) sorted.reverse();

    return sorted;
};

export const sortFilter = (todos, filter, method, desc) => {
    // need to wait lor loaded data
    if (todos !== null) {
        const filtered = filterTodos(todos, filter);
        const sorted = sortTodos(filtered, method, desc);

        return sorted;
    }
};
