import { types } from '../types.js';
import setError from './setError.js';

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
        .catch(e => {
            const desc = "Task wasn't deleted";
            console.error(desc);
            dispatch(setError(desc));
        });
};

export default deleteTodo;
