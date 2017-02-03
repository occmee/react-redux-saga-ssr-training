import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {routerMiddleware, routerReducer} from 'react-router-redux';
import logger from 'redux-logger';
import rootSaga from '../sagas';
import * as reducers from '../reducers';
import {reducer as formReducer} from 'redux-form';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  let middlewares = [
    sagaMiddleware,
  ];
  if (process.env.NODE_ENV !== 'production') {
    middlewares = [...middlewares, logger()];
  }

  const store = createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer,
      form: formReducer,
    }),
    applyMiddleware(
      ...middlewares
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
