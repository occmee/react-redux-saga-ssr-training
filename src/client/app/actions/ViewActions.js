import * as _ from 'lodash';
import {ActionTypes} from '../constants';

export function toggleToast(params) {
  return {
    type: ActionTypes.TOGGLE_TOAST,
    params
  };
}

export function toggleSnackbar(params) {
  return {
    type: ActionTypes.TOGGLE_SNACKBAR,
    params
  };
}

export function toggleLoading(params) {
  return {
    type: ActionTypes.TOGGLE_LOADING,
    params
  };
}

export function resetError() {
  return {
    type: ActionTypes.RESET_ERROR,
  };
}
