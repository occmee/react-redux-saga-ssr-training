import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {RegisterMemberForm} from './';

export default class RegisterMember extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="p-registerMember">
        <div className="p-registerMember__">
        </div>
        <RegisterMemberForm onSubmit={ values => {console.log(values);} } />
      </div>
    );
  }
}
