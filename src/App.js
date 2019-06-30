import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

import Todos from './components/Todos/Todos.js';
import Header from './components/Header.js';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header />
                <Todos />
            </Provider>
        );
    }
}

export default App;
