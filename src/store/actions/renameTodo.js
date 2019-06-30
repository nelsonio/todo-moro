import { types } from '../types.js';

const renameTodo = (id, text) => dispatch => {
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
        .catch(e => console.error("Task wasn't updated"));
};

export default renameTodo;
