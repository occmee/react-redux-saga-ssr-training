import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {BetaEntryList} from '../components/BetaEntryList';
import {ViewActions, BetaEntryActions} from '../actions';

export default connect(state => {
  return {
    payload: state.payload
  };
}, dispatch => {
  return {
    betaEntryActions: bindActionCreators(BetaEntryActions, dispatch),
    viewActions: bindActionCreators(ViewActions, dispatch),
  };
})(BetaEntryList);
