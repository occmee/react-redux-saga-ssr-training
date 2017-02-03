import React, {PropTypes} from 'react';

const ProjectFilter = ({
  projects,
}) => {
  return (
    <div className="p-mypageProjectFilter">
      プロジェクトフィルタ
    </div>
  );
};
export default ProjectFilter;

ProjectFilter.propTypes = {
  projects: PropTypes.array,
};
