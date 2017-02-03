import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Error} from '../components';
import {ViewActions} from '../actions';

export default connect(state => {
  return {
    error: state.error
  };
}, dispatch => {
  return {
    viewActions: bindActionCreators(ViewActions, dispatch),
  };
})(Error);
