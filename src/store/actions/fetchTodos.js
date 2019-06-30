import { types } from '../types.js';

const fetchTodos = () => dispatch => {
    const url = 'http://localhost:8080/todos';

    fetch(url)
        .then(resp => resp.json())
        .then(todos =>
            dispatch({
                type: types.FETCH_TODOS,
                todos,
            })
        )
        .catch(e => console.error("Data couldn't be downloaded from server"));
};

export default fetchTodos;
