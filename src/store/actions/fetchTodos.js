import { types } from '../types.js';
import setError from './setError.js';

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
        .catch(e => {
            const desc = "Data couldn't be downloaded from server";
            console.error(desc);
            dispatch(setError(desc));
        });
};

export default fetchTodos;
