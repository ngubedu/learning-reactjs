import React from 'react';
import { useState } from 'react';
import TodoItem from '../TodoItem';
import './styles.scss';
const TodoList = (props) => {
  const data = localStorage.getItem('todos')? JSON.parse(localStorage.getItem('todos')): [];
  // gán todoList về arr of data localstore
  const [todoList, setTodoList] = useState(data);

  const handleChange = (idx, newStatus) => {
    // New todoList frome current one
    const newTodoList = [...todoList];
    // Update status for item by index
    newTodoList[idx] = {
      ...todoList[idx],
      status: newStatus,
    };
    setTodoList(newTodoList);
  };

  return (
    <>
      <div className="todos">
     { todoList.map((data,index) => (
      <TodoItem 
      idx = {index}
      key= {index}
      title= {data.title}
      author= {data.author}
      status= {data.status}
      desscription= {data.dessctription}
      onHandChange ={handleChange}
      />
     ))}
      </div>
    </>
  );
};

TodoList.propTypes = {};

export default TodoList;
