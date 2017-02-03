import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class GuestOnly extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.userWillTransfer(this.props, this.context.router);
  }

  userWillTransfer(props, router) {
    const authToken = window.localStorage.getItem('authToken');
    if (authToken) this.context.router.replace('/');
  }

  render() {
    return (
      <div className="page-guestOnly">
        {this.props.children}
      </div>
    );
  }
}

export default connect(state => {
  return {
  };
}, dispatch => {
  return {
  };
})(GuestOnly);

GuestOnly.propTypes = {
  children: PropTypes.node,
};

GuestOnly.contextTypes = {
  router: PropTypes.object.isRequired
};
