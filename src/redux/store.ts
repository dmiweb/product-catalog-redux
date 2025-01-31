import { combineReducers, legacy_createStore } from 'redux';
import productsReducer from './productsReducer';

// const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      products: productsReducer,
    }),
    // ReactReduxDevTools
  );
}

export default configureStore;
