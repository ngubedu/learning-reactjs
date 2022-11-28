import React from 'react';
import { useState } from 'react';
import { Status , COLOR } from '../datas/constains';
import { Link } from "react-router-dom";
import Button from '../common/Button';
import './styles.scss';
const TodoItem = ({removeTodoItem,idx,onHandleChange,todo,id}) => {
  const [newStatus, setNewStatus] = useState(todo.status)
  const [textColor, setTextColor] = useState(todo.color)
  const handleChangeStatus = (e) =>{ 
    switch (newStatus) {
      case Status.NEW:
        setNewStatus(Status.DOING);
        setTextColor(COLOR.colorDoing)
        break;
        case Status.DOING:
          setNewStatus(Status.DONE);
          setTextColor(COLOR.colorDone)
          break;
          case Status.DONE:
            setNewStatus(Status.NEW) 
            setTextColor(COLOR.colorNew);
            break
          default:
          throw new Error("error")
          }  
          onHandleChange(newStatus, textColor,idx)
  }
  // **********************
  const handleDeleteItem =()=>{
    removeTodoItem(id)
  }

  return (
   <>
    <div className="card">
      <div className="card__container">
        <div className="card__btnClose">
          <Button
          name={"x"}
          handleClick={handleDeleteItem}
          />
        </div>
        <p className="card__title">
          <label>Title: </label>
          <label>{todo.title}</label>
        </p>
        <p className="card__creator" >
          <label>Creator: </label>
          <label>{todo.author}</label>
        </p>
        <p className="card__status" 
        style={{color:todo.color}}
        >
          <label>Status: </label>
          <label>{todo.status}</label>
        </p>
        <hr className="card__lineBreak" />
        <p className="card__description">Description: {todo.description}</p>
        <div className="card__btn">
            <Button
              handleClick={handleChangeStatus}
              name={todo.status}
            />
            <Link to={`/update-task/${todo.id}`} state={{ todo: todo }}>
              <Button
                className="card__btn--update"
                name={<i className="fa-sharp fa-solid fa-pen-to-square"></i>}
              /> 
            </Link>
            </div>
      </div>
    </div>
   </>
  );
};
export default TodoItem;
