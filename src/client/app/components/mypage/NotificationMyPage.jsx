import React, {PropTypes} from 'react';

const NotificationMyPage = ({
  router, notifications,
}) => {
  return (
    <div className="p-mypageNotification">
      {notifications.map(n => (
        `noti: ${n.id}`
      ))}
    </div>
  );
};
export default NotificationMyPage;

NotificationMyPage.propTypes = {
  router: PropTypes.object,
  notifications: PropTypes.array,
};
