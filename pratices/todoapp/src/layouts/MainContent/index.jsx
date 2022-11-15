import React from 'react';
import Pagination from '../../components/Pagination';
import TodoList from '../../components/TodoList';
import './styles.scss';
const MainContent = ({status}) => {
  return (
    <div className="main-container">
      <TodoList status={status}/>
      <Pagination />
    </div>
  );
};
export default MainContent;
