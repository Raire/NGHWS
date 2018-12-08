import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

const rootReducer = () => {
  return {};
};

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;