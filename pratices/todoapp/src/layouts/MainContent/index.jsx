import React from 'react';
import Pagination from '../../components/Pagination';
import TodoList from '../../components/TodoList';

import './styles.scss';

const MainContent = (props) => {
  return (
    <div className="main-container">
      <TodoList />
      <Pagination />
    </div>
  );
};

MainContent.propTypes = {};

export default MainContent;
