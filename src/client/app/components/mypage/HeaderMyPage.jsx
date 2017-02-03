import React, {PropTypes} from 'react';

const HeaderMyPage = ({
  router, user: {icon, name, email},
}) => {
  return (
    <div className="p-mypageHeader">
      {`ヘッダ：${name}`}
    </div>
  );
};
export default HeaderMyPage;

HeaderMyPage.propTypes = {
  router: PropTypes.object,
  user: PropTypes.object,
};
