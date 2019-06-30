import { types } from '../types.js';

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
        .catch(e => console.error("Task wasn't added"));
};

export default addTodo;
