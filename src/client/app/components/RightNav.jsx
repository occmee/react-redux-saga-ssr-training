import React, {Component, PropTypes} from 'react';

export default class RightNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {children} = this.props;
    return (
      <div className="l-rightnav">
        {this.props.children}
      </div>
    );
  }
}

RightNav.propTypes = {
  children: PropTypes.node,
};
