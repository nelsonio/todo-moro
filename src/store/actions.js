export const Types = {
    FETCH_TODOS: 'FETCH_TODOS',
    ADD_TODO: 'ADD_TODO',
    DELETE_TODO: 'DELETE_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
};

export const fillTodos = () => dispatch => {
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

export const addTodo = text => ({
    type: Types.ADD_TODO,
    text,
});

export const deleteTodo = id => ({
    type: Types.DELETE_TODO,
    id,
});

export const toggleTodo = id => ({
    type: Types.TOGGLE_TODO,
    id,
});
