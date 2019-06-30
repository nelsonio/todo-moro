import { types } from '../types.js';

const toggleTodo = (id, completed) => dispatch => {
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
        .catch(e => console.error("Task wasn't updated"));
};

export default toggleTodo;
