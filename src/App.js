import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

import Todos from './Todos.js';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <h1>MoroTodo</h1>
                <Todos />
            </Provider>
        );
    }
}

export default App;
