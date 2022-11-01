import React from 'react';
import { useState } from 'react';
import { Status } from '../datas/constains';
import './styles.scss';
// import {nemBerTodo} from '../datas/todo'
const TodoItem = (props) => {
  // const [nemBerTodo,setNemBerTodo] = useState([]);
  const {title, creator, desscription} = props;
  const [status, setStatus] = useState(Status.NEW)
  const [textColor, setTextColor] = useState("var(--new)")

  const handleSubmit = () =>{
    if (status === Status.NEW ) {
      setStatus(Status.DOING);
      setTextColor(" var(--orange) ");
    }else if (status === Status.DOING) {
      setStatus(Status.DONE);
      setTextColor("var( --primary)");
    }else{
      setStatus(Status.NEW) 
      setTextColor(" var(--new)");
    }
  }
  
  return (
    <div className="card">
      <div className="card__container">
        <p className="card__title">
        
          <label>Title: </label>
          <label>{title}</label>
        </p>
        <p className="card__creator" >
          <label>Creator: </label>
          <label>{creator}</label>
        </p>
        <p className="card__status" 
        key={status}
        style ={ {color : textColor}}
        >
          <label>Status: </label>
          <label>{status }</label>
        </p>
        <hr className="card__lineBreak" />
        <p className="card__description">Description:{desscription}</p>
        <div className="card__btn">
                <button 
                onClick={() =>handleSubmit()}
                value={status}
                >
                {status}
                </button>
            </div>
      </div>
    </div>
  );
};

export default TodoItem;
