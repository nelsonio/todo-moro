import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

import TodoMain from './components/Todos/TodoMain.js';
import Header from './components/Header.js';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header />
                <TodoMain />
            </Provider>
        );
    }
}

export default App;
