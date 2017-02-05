import * as _ from 'lodash';
import {ActionTypes} from '../constants';

const initialState = {
  betaEntries: [],
};


export default function Loading(state = initialState, action) {
  switch (action.type) {
    case `${ActionTypes.QUERY_BETA_ENTRIES}`:
      return {
        ...state,
        betaEntries: action.payload.betaEntries,
      };
    default:
      return state;
  }
}
