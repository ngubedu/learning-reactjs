import React from 'react';
// import Form from '../../components/Form';
// import Pagination from '../../components/Pagination';
import TodoList from '../../components/TodoList';

import './styles.scss';

const MainContent = (props) => {
  return (
    <div className="main-container">
      <TodoList />
      {/* <Form></Form> */}
      {/* <Pagination /> */}
    </div>
  );
};

MainContent.propTypes = {};

export default MainContent;
