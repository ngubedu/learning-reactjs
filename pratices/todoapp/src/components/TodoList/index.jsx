import React from 'react';
// import { useState } from 'react';
// import {Status} from '../data/constains'
import TodoItem from '../TodoItem';
import {nemBerTodo} from '../datas/todo'
import './styles.scss';

const TodoList = (props) => {
  // const [todo,setTodo] = useState("")
  // const [todos, setTodos] = useState(() => {
  //   const storageTodos = JSON.parse(localStorage.getItem('todos'))
 
  //   return storageTodos;
  // });
   
      // setTodos(() =>{
      //   const newTodos =nemBerTodo
      //   const jsonTodos = JSON.stringify(newTodos)
      //   localStorage.setItem('todos', jsonTodos)

      //  return jsonTodos;
      // })
  
  return (
    <>
      <div className="todos">
     { nemBerTodo.map((data,id) => (
      <TodoItem 
      key= {id}
      title= {data.title}
      creator= {data.creator}
      status= {data.status}
      desscription= {data.desscription}
      />
     ))}
    {console.log(nemBerTodo)}
      </div>

    </>
  );
};

TodoList.propTypes = {};

export default TodoList;
