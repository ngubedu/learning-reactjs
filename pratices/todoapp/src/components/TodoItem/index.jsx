import React from 'react';
import { useState } from 'react';
import './styles.scss';

const TodoItem = (props) => {
  const {title,creator,desscription} = props;
  const [status, setStatus] = useState("New")
  const handleSubmit = (e) =>{
     const selectedStatus = e.target.value;
     setStatus(selectedStatus)
  }
  return (
    <div className="card">
      <div className="card__container">
        <p className="card__title">
          <label>Title: </label>
          <label>{title}</label>
        </p>
        <p className="card__creator">
          <label>Creator: </label>
          <label>{creator}</label>
        </p>
        <p className="card__status">
          <label>Status: </label>
          <label>{status}</label>
        </p>
        <hr className="card__lineBreak" />
        <p className="card__description">Description: {desscription}</p>
        <div className="card__btn">
                <button 
                onChange={handleSubmit}
                value={status}
                >
                    <select  id="select__status" >
                    <option value="New" >New</option>
                    <option value="Doing" >Doing</option>
                    <option value="Done" >Done</option>
                    </select>               
                </button>
            </div>
      </div>
    </div>
  );
};

TodoItem.propTypes = {};

export default TodoItem;
