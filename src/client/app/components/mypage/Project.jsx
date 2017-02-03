import React, {PropTypes} from 'react';

const Project = ({
  router, id, title, status, members, description,
  lastUpdate: {user, updatedAt}, stat: {post, like, comment},
}) => {
  return (
    <div className="c-project">
      {title}
    </div>
  );
};
export default Project;

Project.propTypes = {
  router: PropTypes.object,
  id: PropTypes.number,
  title: PropTypes.string,
  status: PropTypes.string,
  members: PropTypes.array,
  description: PropTypes.string,
  lastUpdate: PropTypes.object,
  stat: PropTypes.object,
};
