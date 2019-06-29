export const Types = {
    FETCH_TODOS: 'FETCH_TODOS',
    ADD_TODO: 'ADD_TODO',
    DELETE_TODO: 'DELETE_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
};

export const fetchTodos = () => dispatch => {
    const url = 'http://localhost:8080/todos';

    fetch(url)
        .then(resp => resp.json())
        .then(todos =>
            dispatch({
                type: Types.FETCH_TODOS,
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
                type: Types.ADD_TODO,
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
                type: Types.DELETE_TODO,
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
                type: Types.TOGGLE_TODO,
                data,
            })
        )
        .catch(e => console.error('Something went wrong...'));
};
