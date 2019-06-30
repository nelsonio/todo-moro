export const types = {
    FETCH_TODOS: 'FETCH_TODOS',
    ADD_TODO: 'ADD_TODO',
    DELETE_TODO: 'DELETE_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    RENAME_TODO: 'RENAME_TODO',
    SET_FILTER: 'SET_FILTER',
};

export const filters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
};

export const fetchTodos = () => dispatch => {
    const url = 'http://localhost:8080/todos';

    fetch(url)
        .then(resp => resp.json())
        .then(todos =>
            dispatch({
                type: types.FETCH_TODOS,
                todos,
            })
        )
        .catch(e => console.error('Something went wrong...'));
};

export const addTodo = text => dispatch => {
    const url = 'http://localhost:8080/todos';
    const data = { text };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    fetch(url, options)
        .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: types.ADD_TODO,
                data,
            });
        })
        .catch(e => console.error('Something went wrong...'));
};

export const deleteTodo = id => dispatch => {
    const url = `http://localhost:8080/todos/${id}`;
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    fetch(url, options)
        .then(() =>
            dispatch({
                type: types.DELETE_TODO,
                id,
            })
        )
        .catch(e => console.error('Something went wrong...'));
};

export const toggleTodo = (id, completed) => dispatch => {
    const url = completed
        ? `http://localhost:8080/todos/${id}/incomplete`
        : `http://localhost:8080/todos/${id}/complete`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    fetch(url, options)
        .then(resp => resp.json())
        .then(data =>
            dispatch({
                type: types.TOGGLE_TODO,
                data,
            })
        )
        .catch(e => console.error('Something went wrong...'));
};

export const renameTodo = (id, text) => dispatch => {
    const url = `http://localhost:8080/todos/${id}`;
    const data = { text };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    fetch(url, options)
        .then(() => {
            dispatch({
                type: types.RENAME_TODO,
                id,
                text,
            });
        })
        .catch(e => console.error('Something went wrong...'));
};

export const setFilter = filter => ({
    type: types.SET_FILTER,
    filter,
});
