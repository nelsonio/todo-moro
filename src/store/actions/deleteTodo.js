import { types } from '../types.js';

const deleteTodo = id => dispatch => {
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
        .catch(e => console.error("Task wasn't deleted"));
};

export default deleteTodo;
