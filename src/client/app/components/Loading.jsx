import React, {Component, PropTypes} from 'react';

function preventDefault(e) {
  e.stopPropagation();
  e.preventDefault();
  return null;
}

const Loading = ({
  loading,
}) => {
  return (
    <div className={`c-loading ${loading ? 'is-open' : ''}`}>
      <div
        className={`c-overlay ${loading ? 'is-open' : ''}`}
        onTouchStart={e => preventDefault(e)}
      />
      <div className="c-loading__content">
        <div className="c-loading__content__objects">
          {/* by http://tobiasahlin.com/spinkit/ */}
          <div className="spinner">
            <div className="cube1"></div>
            <div className="cube2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loading;

Loading.propTypes = {
  loading: PropTypes.bool,
};
