import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {reducer as todoReducer} from './todos';
import {reducer as filterReducer} from './filter';
import {composeWithDevTools} from "redux-devtools-extension";

const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
});

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));