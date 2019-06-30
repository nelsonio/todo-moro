import { types } from '../types.js';
import setError from './setError.js';

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
        .catch(e => {
            const desc = "Task couldn't be updated. Try again later.";
            console.error(desc);
            dispatch(setError(desc));
        });
};

export default toggleTodo;
