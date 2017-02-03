import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {App} from '../components/app';

export default connect((state, ownProps) => {
  return {
    view: state.view,
  };
}, dispatch => {
  return {
  };
})(App);
