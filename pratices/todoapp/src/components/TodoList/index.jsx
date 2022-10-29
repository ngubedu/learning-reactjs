import React from 'react';

import TodoItem from '../TodoItem';

import './styles.scss';

const TodoList = (props) => {
  const  memBerTask =[
    {
      title:"task1",
      creator:"author 1",
      status:"new",
      desscription: "This is a task, This is a task, This is a task,...",
    },
    {
      title:"task2",
      creator:"author 1",
      status:"new",
      desscription: "This is a task, This is a task, This is a task,...",
    },
    {
      title:"task3",
      creator:"author 1",
      status:"new",
      desscription: "This is a task, This is a task, This is a task,...",
    },
    {
      title:"task4",
      creator:"author 1",
      status:"new",
      desscription: "This is a task, This is a task, This is a task,...",
    },
    {
      title:"task4",
      creator:"author 1",
      status:"new",
      desscription: "This is a task, This is a task, This is a task,...",
    },
    {
      title:"task4",
      creator:"author 1",
      status:"new",
      desscription: "This is a task, This is a task, This is a task,...",
    },
    {
      title:"task4",
      creator:"author 1",
      status:"new",
      desscription: "This is a task, This is a task, This is a task,...",
    },
    {
      title:"task4",
      creator:"author 1",
      status:"new",
      desscription: "This is a task, This is a task, This is a task,...",
    },
    {
      title:"task4",
      creator:"author 1",
      status:"new",
      desscription: "This is a task, This is a task, This is a task,...",
    },
    {
      title:"task4",
      creator:"author 1",
      status:"new",
      desscription: "This is a task, This is a task, This is a task,...",
    },
    {
      title:"task4",
      creator:"author 1",
      status:"new",
      desscription: "This is a task, This is a task, This is a task,...",
    },
    {
      title:"task4",
      creator:"author 1",
      status:"new",
      desscription: "This is a task, This is a task, This is a task,...",
    },
  
  ]
  return (
    <>
      <div className="todos">
     { memBerTask.map((data,index) => (
      <TodoItem 
      key= {index}
      title= {data.title}
      creator= {data.creator}
      status= {data.status}
      desscription= {data.desscription}
      />
     ))}
      </div>
    </>
  );
};

TodoList.propTypes = {};

export default TodoList;
