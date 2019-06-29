import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

import Todos from './components/Todos.js';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <header>
                    <h1>
                        <span className="yellow">Moro</span>Todo
                    </h1>
                </header>
                <Todos />
            </Provider>
        );
    }
}

export default App;
