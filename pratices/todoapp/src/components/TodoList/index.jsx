import React from 'react';
// import { useState } from 'react';
// import {Status} from '../data/constains'
import TodoItem from '../TodoItem';
// import {nemBerTodo} from '../datas/todo'
import './styles.scss';


const TodoList = (props) => {
 let  data = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
//  console.log(datas)
  return (
    <>
      <div className="todos">
     { data.map((data,id) => (
      <TodoItem 
      key= {id}
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
