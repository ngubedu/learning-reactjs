import React from 'react';
import { useState } from 'react';
import { Status } from '../datas/constains';
import './styles.scss';
// import {nemBerTodo} from '../datas/todo'
const TodoItem = (props) => {
  // const [nemBerTodo,setNemBerTodo] = useState([]);
  
  const {title,creator, desscription} = props;
  const [status, setStatus] = useState(Status.NEW)
  
  const handleSubmit = () =>{
     switch (status) {
      case Status.NEW:
        setStatus(Status.DOING);
       
        break;
        case Status.DOING:
          setStatus(Status.DONE);
          break;
      default :
      setStatus(Status.NEW) 
        break;
     }
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
          <label>{status || Status.NEW}</label>
        </p>
        <hr className="card__lineBreak" />
        <p className="card__description">Description:{desscription}</p>
        <div className="card__btn">
                <button 
                onClick={handleSubmit}
                value={status}
                >
                  {status}
                </button>
            </div>
      </div>
    </div>
  );
};

TodoItem.propTypes = {};

export default TodoItem;
