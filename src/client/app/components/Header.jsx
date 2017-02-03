import React, {Component, PropTypes} from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {children} = this.props;
    return (
      <div className="l-header">
        {this.props.children}
      </div>
    );
  }
}

Header.propTypes = {
  children: PropTypes.node,
};
