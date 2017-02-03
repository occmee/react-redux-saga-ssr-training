import React, {Component, PropTypes} from 'react';

export default class Drawer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {children} = this.props;
    return (
      <div className="l-drawer">
        {this.props.children}
      </div>
    );
  }
}

Drawer.propTypes = {
  children: PropTypes.node,
};
