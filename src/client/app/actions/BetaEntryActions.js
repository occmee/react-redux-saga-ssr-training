import * as _ from 'lodash';
import {ActionTypes} from '../constants';

export function submit(payload, resolve) {
  return {
    type: ActionTypes.MUTATE_BETA_ENTRY,
    payload,
    resolve,
  };
}

export function getBetaEntries(payload, resolve) {
  return {
    type: ActionTypes.QUERY_BETA_ENTRIES,
    payload,
    resolve
  }
}