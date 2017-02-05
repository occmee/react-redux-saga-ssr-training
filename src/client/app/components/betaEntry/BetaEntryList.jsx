import React, {Component, PropTypes} from 'react';

class BetaEntryList extends Component {
  constructor(props) {
    super(props);
  }

  _renderBetaEntry(betaEntry) {
    return (
      <li>{betaEntry.id} : {betaEntry.companyName}</li>
    );
  }

  render() {
    const {betaEntries} = this.props;

    return (
      <ul>
        {betaEntries.map(this._renderBetaEntry)}
      </ul>
    );
  }
}

BetaEntryList.propTypes = {
  betaEntries: PropTypes.array
};

export default BetaEntryList;
