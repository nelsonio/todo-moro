import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoApp from './reducer.js';

export const store = createStore(todoApp, applyMiddleware(thunk));
