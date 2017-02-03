/* eslint-disable */
// import 'babel-polyfill';
import * as React from 'react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import AppRouter from './AppRouter';
import configureStore from './stores/configureStore';

import '!style!css!stylus!./styles/index.styl';

const store = configureStore();
const routes = AppRouter();
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>{routes}</Router>
  </Provider>,
  document.getElementById('root')
);
