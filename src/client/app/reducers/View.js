import * as _ from 'lodash';
import {ActionTypes} from '../constants';

const initialState = {
  loading: false,
};


export default function Loading(state = initialState, action) {
  switch (action.type) {
    case `${ActionTypes.TOGGLE_LOADING}`:
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
}
