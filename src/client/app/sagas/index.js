// import 'babel-polyfill';
import {takeEvery, takeLatest} from 'redux-saga';
import {ActionTypes} from '../constants';
import {mutateBetaEntry} from './BetaEntry';

export default function* rootSaga() {
  yield [
    takeEvery(ActionTypes.MUTATE_BETA_ENTRY, mutateBetaEntry),
  ];
}
