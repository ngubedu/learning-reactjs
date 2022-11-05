import React from 'react';
import { useState } from 'react';
import TodoItem from '../TodoItem';
import './styles.scss';
const TodoList = () => {
  const datas = localStorage.getItem('todos')? JSON.parse(localStorage.getItem('todos')): [];
  // gán todoList về arr of data localstore
  const [todoList, setTodoList] = useState(datas);
  // add event removeitem
  const removeTodoItem = (id) =>{
    let Check = window.confirm("Do you want remove Task")
    if (Check === true) {
      const newTodoList = todoList.filter((data) => data.id !== id )
      localStorage.setItem("todos",JSON.stringify(newTodoList))
      setTodoList(newTodoList)
    }
  }
  const handleChange = (id, newStatus) => {
    // New todoList from current one
    let newTodoList = [...todoList];
    // Update status for item by index
    newTodoList[id] = {
      ...todoList[id],
      status: newStatus,
    };
    localStorage.setItem("todos",JSON.stringify(newTodoList))
    setTodoList(newTodoList);
    console.log(newTodoList);
    
  };
  return (
    <>
      <div className="todos">
     { todoList.map((data,index) => (
      <TodoItem 
      key= {data.id}
      id = {data.id}
      title= {data.title}
      author= {data.author}
      status= {data.status}
      desscription= {data.dessctription}
      onHandleChange ={handleChange}
      removeTodoItem={removeTodoItem}
      />
     ))}
      </div>
    </>
  );
};
export default TodoList;
