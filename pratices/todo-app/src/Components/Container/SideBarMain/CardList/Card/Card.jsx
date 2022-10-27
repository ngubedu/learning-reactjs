import React from 'react';
import {useState} from 'react'
Card.propTypes = {};

function Card(props) {
    const {title,creator,desscription} = props;
    const [status, setStatus] = useState("New")
    const handleSubmit = (e) =>{
       const selectedStatus = e.target.value;
       setStatus(selectedStatus)
    }
    return (
        <>
        <div className='card'>
            <div className="card__infor">
                <h5 className=''>Title : {title}</h5>
                <p>Creator: {creator}</p>
                <h5 >Status: {status}</h5>
            </div>
            <div className="card__desscription">
                <h5>Desscription</h5>
                <p>{desscription}</p>
            </div>
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
        </>
    );
}

export default Card;