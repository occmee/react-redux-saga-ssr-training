import React, {Component, PropTypes} from 'react';

export default class Contents extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {children} = this.props;
    return (
      <div className="l-contents">
        {this.props.children}
      </div>
    );
  }
}

Contents.propTypes = {
  children: PropTypes.node,
};
