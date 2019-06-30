import { types } from '../types.js';
import setError from './setError.js';

const addTodo = text => dispatch => {
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
        .catch(e => {
            const desc = "Task wasn't added. Try again later.";
            console.error(desc);
            dispatch(setError(desc));
        });
};

export default addTodo;
