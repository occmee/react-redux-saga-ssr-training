import React, {Component, PropTypes} from 'react';

export default class AppBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {children} = this.props;
    return (
      <div className="l-appbar">
        {this.props.children}
      </div>
    );
  }
}

AppBar.propTypes = {
  children: PropTypes.node,
};
