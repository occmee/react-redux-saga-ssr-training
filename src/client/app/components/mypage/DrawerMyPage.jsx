import React, {PropTypes} from 'react';

const DrawerMyPage = ({
  router,
}) => {
  return (
    <div className="p-mypageDrawer">
      ドロワー
    </div>
  );
};
export default DrawerMyPage;

DrawerMyPage.propTypes = {
  router: PropTypes.object,
};
