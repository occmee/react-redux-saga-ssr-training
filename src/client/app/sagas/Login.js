// import 'babel-polyfill';
import {call, put, select} from 'redux-saga/effects';
import {hashHistory} from 'react-router';
import {ActionTypes} from '../constants';
import Api from '../api/Api';
import {setToken, setUserType, reset, sleep} from '../utils';
import {loading, loaded} from './util';

export function* mutateLogin(action) {
  yield put(loading);
  const {payload, error} = yield call(Api.fetchLogin, action.payload);
  if (payload && !error) {
    yield put({
      type: `${ActionTypes.FETCH_LOGIN}_SUCCESS`,
      payload
    });
    yield setToken(payload.authToken);
    yield setUserType(payload.user.type);
    yield (
      hashHistory.push(payload.user.type)
    );
  } else {
    yield put({
      type: `${ActionTypes.SHOW_ERROR}`,
      error
    });
  }
  yield put(loaded);
}

export function* mutateLogout(action) {
  const {payload, error} = yield call(Api.fetchLogout, action.payload);
  if (payload && !error) {
    yield put({
      type: `${ActionTypes.FETCH_LOGOUT}_SUCCESS`,
      payload
    });
    yield reset();
    yield (
      hashHistory.push('/login')
    );
  } else {
    yield reset();
    yield (
      hashHistory.push('/login')
    );
  }
}
