import _ from 'lodash';
import {ActionTypes} from '../constants';

const initialState = {
  isError: false,
  error: {
    status: null,
    message: ''
  }
};

export default function Errors(state = initialState, action = {}) {
  switch (action.type) {
    case `${ActionTypes.SHOW_ERROR}`:
      return {
        ...state,
        isError: true,
        error: action.error
      };
    case `${ActionTypes.TOGGLE_ERROR}`:
      return {
        ...state,
        isError: action.isError
      };
    case `${ActionTypes.RESET_ERROR}`:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
