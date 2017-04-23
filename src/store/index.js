/* eslint-disable global-require */

import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import loggerMiddleware from './../middleware/logger';
import rootReducer from './../reducers';

export default function configureStore() {
  const store = createStore(rootReducer, {}, applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ));

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  store.subscribe(() => console.log(store.getState())); // eslint-disable-line

  return store;
}
