import React, {Component, PropTypes} from 'react';

class BetaEntryList extends Component {
  constructor(props) {
    super(props);
    this.props.betaEntryActions.getBetaEntries();
  }

  _renderBetaEntry(betaEntry) {
    return (
      <li>{betaEntry.id} : {betaEntry.companyName}</li>
    );
  }

  render() {
    const {payload} = this.props;
    const betaEntries = payload.betaEntries || [];

    return (
      <ul>
        {betaEntries.map(this._renderBetaEntry)}
      </ul>
    );
  }
}

BetaEntryList.propTypes = {
  betaEntryActions: PropTypes.object,
  payload: PropTypes.object
};

export default BetaEntryList;
