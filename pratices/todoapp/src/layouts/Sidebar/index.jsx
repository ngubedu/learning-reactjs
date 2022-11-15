import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <p><Link to="/all-task">All Task</Link></p>
      </div>
      <div className="sidebar__item">
        <p><Link to="/new-task">New Task</Link></p>
      </div>
      <div className="sidebar__item">
      <p><Link to="/doing-task">Doing Task</Link></p>
      </div>
      <div className="sidebar__item">
      <p><Link to="/done-task">Done Task</Link></p>
      </div>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
