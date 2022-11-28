import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TodoItem from '../TodoItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.scss';

const TodoList = (props) => {
  const [todoList, setTodoList] = useState([])
  useEffect(() =>{
    const data = localStorage.getItem('todos')? JSON.parse(localStorage.getItem('todos')): [];
    setTodoList(data)
  },[])
  // add event removeitem
  const removeTodoItem = (id) =>{
    let Check = window.confirm("Do you want remove Task")
    if (Check === true) {
      const newTodoList = todoList.filter((data) => data.id !== id )
      toast.success("Bạn đã Xóa thành công id:"+id)
      localStorage.setItem("todos",JSON.stringify(newTodoList))
      setTodoList(newTodoList)
    }else{
      return toast.error("Hủy thao tác");
    }
  }
  //  change Status
  const handleChange = ( newStatus, textColor,idx) => {
    // New todoList from current one
    let newTodoList = [...todoList];
    // Update status for item by index
    newTodoList[idx] = {
      ...todoList[idx],
      status: newStatus,
      color: textColor,
    };
    setTodoList(newTodoList)
    localStorage.setItem("todos",JSON.stringify(newTodoList))
    return newTodoList
  };
//  update item


//  render
  return (
    <>
      <div className="todos">
        {todoList.length < 1 &&<div className="todos__emptyItem"><h1> Not Task in Datas</h1></div>}
        {!props.status
          ? todoList.map((data,index) => (
          <TodoItem 
          idx ={index}
          key= {data.id}
          id ={data.id}
          todo={data}
          onHandleChange ={handleChange}
          removeTodoItem={removeTodoItem}
        />
     ))
        : todoList
          .filter((data) => data.status === props.status)
          .map((data,index) => (
            <TodoItem 
            idx ={index}
            key= {data.id}
            id ={data.id}
            todo={data}
            onHandleChange ={handleChange}
            removeTodoItem={removeTodoItem}
            />
        ))
      }
      </div>
        <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
    </>
  );
};
export default TodoList;
