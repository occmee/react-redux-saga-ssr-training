import React, {Component, PropTypes} from 'react';
import {Error} from '../../containers';
import {Header, Drawer, Loading} from '../';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // initializeServices({host: URI_API});
  }

  render() {
    const {children, view} = this.props;

    return (
      <div className="container">
        <div className="l-main">
          {this.props.children}
        </div>
        <Loading loading={view.loading} />
        <Error />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  view: PropTypes.object,
};

App.contextTypes = {
  router: PropTypes.object.isRequired
};
