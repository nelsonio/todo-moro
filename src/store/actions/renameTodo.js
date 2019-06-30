import { types } from '../types.js';
import setError from './setError.js';

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
        .catch(e => {
            // task is still shown on the page with new text
            const desc = "Task wasn't really updated. Try again later.";
            console.error(desc);
            dispatch(setError(desc));
        });
};

export default renameTodo;
