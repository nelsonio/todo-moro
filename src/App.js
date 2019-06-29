import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

import Todos from './Todos.js';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <main>
                    <h1>
                        <span className="yellow">Moro</span>Todo
                    </h1>
                    <Todos />
                </main>
            </Provider>
        );
    }
}

export default App;
