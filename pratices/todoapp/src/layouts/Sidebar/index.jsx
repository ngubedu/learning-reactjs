import React from 'react';

import './styles.scss';

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <p>All Task</p>
      </div>
      <div className="sidebar__item">
        <p>New Task</p>
      </div>
      <div className="sidebar__item">
        <p>Doing Task</p>
      </div>
      <div className="sidebar__item">
        <p>Done Task</p>
      </div>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
