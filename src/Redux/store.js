import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    form: formReducer
})

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export default store