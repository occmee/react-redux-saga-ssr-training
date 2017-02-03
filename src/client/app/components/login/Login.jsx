import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {LoginForm} from './';

export default class Login extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="p-login">
        <div>
        </div>
        <LoginForm onSubmit={ values => {console.log(values);} } />
      </div>
    );
  }
}
