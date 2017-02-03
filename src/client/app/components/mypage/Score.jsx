import React, {PropTypes} from 'react';

const Score = ({
  score, finish, post, reaction, assist
}) => {
  return (
    <div className="c-score">
      {`スコア：${score}`}
    </div>
  );
};
export default Score;

Score.propTypes = {
  score: PropTypes.number,
  finish: PropTypes.number,
  post: PropTypes.number,
  reaction: PropTypes.number,
  assist: PropTypes.number,
};
