import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

import TodosMain from './components/Todos/TodosMain.js';
import Header from './components/Header.js';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header />
                <TodosMain />
            </Provider>
        );
    }
}

export default App;
