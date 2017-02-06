// import 'babel-polyfill';
import {call, put, select} from 'redux-saga/effects';
import {ActionTypes} from '../constants';
import GraphqlClient from '../api/GraphqlClient';
import {sleep} from '../utils';
import {loading, loaded} from './util';

export function* mutateBetaEntry(action) {
  yield put(loading);
  const {payload, error} = yield call(GraphqlClient.postBetaEntry, action.payload);
  if (payload && !error) {
    yield put({
      type: `${action.type}_SUCCESS`,
      payload
    });
    if (action.resolve) yield call(action.resolve, payload);
  } else {
    yield put({
      type: `${ActionTypes.SHOW_ERROR}`,
      error
    });
  }
  yield put(loaded);
}

export function* getBetaEntries(action) {
  yield put(loading);
  const {payload, error} = yield call(GraphqlClient.getBetaEntries, action.payload);
  if (payload && !error) {
    yield put({
      type: `${action.type}_SUCCESS`,
      payload
    });
    if (action.resolve) yield call(action.resolve, payload);
  } else {
    yield put({
      type: `${ActionTypes.SHOW_ERROR}`,
      error
    });
  }
  yield put(loaded);
}
