import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';
import rootReducer from './reducers/index';

const promisesMiddleware = promiseMiddleware({
  promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR']
});

const middleware = [promisesMiddleware, logger];

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(...middleware));
  return store;
};

export default configureStore;
