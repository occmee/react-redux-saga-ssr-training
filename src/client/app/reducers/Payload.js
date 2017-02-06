import * as _ from 'lodash';
import {ActionTypes} from '../constants';

const initialState = {
  betaEntry: {},
  betaEntries: []
};


export default function Payload(state = initialState, action) {
  switch (action.type) {
    case `${ActionTypes.POST_BETA_ENTRIES}_SUCCESS`:
      return {
        ...state,
        betaEntry: action.payload.postBetaEntry
      };
    case `${ActionTypes.QUERY_BETA_ENTRIES}_SUCCESS`:
      return {
        ...state,
        betaEntries: action.payload.betaEntries
      };
    default:
      return state;
  }
}
