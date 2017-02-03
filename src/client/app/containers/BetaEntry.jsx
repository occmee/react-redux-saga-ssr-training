import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {BetaEntry} from '../components/betaEntry';
import {ViewActions, BetaEntryActions} from '../actions';

export default connect(state => {
  return {
  };
}, dispatch => {
  return {
    betaEntryActions: bindActionCreators(BetaEntryActions, dispatch),
    viewActions: bindActionCreators(ViewActions, dispatch),
  };
})(BetaEntry);
