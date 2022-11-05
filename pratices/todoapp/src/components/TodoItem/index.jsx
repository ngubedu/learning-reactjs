import React from 'react';
import { useState } from 'react';
import { Status } from '../datas/constains';
import './styles.scss';
const TodoItem = ({title, author, desscription, removeTodoItem, id, onHandleChange, status}) => {
  const [newStatus, setNewStatus] = useState(status)
  const [textColor, setTextColor] = useState("var(--new)")
  const handleChangeStatus = (e) =>{
    switch (newStatus) {
      case status:
        setNewStatus(Status.DOING);
        setTextColor(" var(--orange) ")
        break;
        case Status.DOING:
          setNewStatus(Status.DONE);
          setTextColor(" var(--primary) ")
          break;
          default:
            setNewStatus(Status.NEW) 
            setTextColor(" var(--new)");
            break;
          }
    onHandleChange(id)
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
          <button 
          id={id}
          onClick={handleDeleteItem}
          >x
          </button>
        </div>
        <p className="card__title">
          <label>Title: </label>
          <label>{title}</label>
        </p>
        <p className="card__creator" >
          <label>Creator: </label>
          <label>{author}</label>
        </p>
        <p className="card__status" 
        key={status}
        style ={ {color : textColor}}
        >
          <label>Status: </label>
          <label>{newStatus }</label>
        </p>
        <hr className="card__lineBreak" />
        <p className="card__description">Description: {desscription}</p>
        <div className="card__btn">
                <button 
                id={id}
                onClick={handleChangeStatus}
                value={status}
                >
                {newStatus}
                </button>
            </div>
      </div>
    </div>
   </>
  );
};
export default TodoItem;
