import React from 'react';
import Form from '../../components/Form';
// import Pagination from '../../components/Pagination';
// import TodoList from '../../components/TodoList';

import './styles.scss';

const MainContent = (props) => {
  return (
    <div className="main-container">
      <Form></Form>
      {/* <TodoList /> */}
      {/* <Pagination /> */}
    </div>
  );
};

MainContent.propTypes = {};

export default MainContent;
