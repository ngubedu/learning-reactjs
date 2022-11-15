import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import '../FormAddNewTask/style.scss'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function FormUpdateTask() {
    const location = useLocation()
    const { todo } = location.state;
    const navigate = useNavigate(); 
    const [data, setData] = useState([])
    const [formUpdate, setFormUpdate] = useState(todo)
    useEffect(()=>{
        const data = localStorage.getItem('todos')? JSON.parse(localStorage.getItem('todos')): [];
        setData(data)
    },[])
    // on change input form
    const handleChangeInput = (e) => {
        setFormUpdate((prev) =>({
            ...prev,
            [e.target.name]: e.target.value,
        }))
        console.log(data);
    };
    //  add event nut cancel
    const handleCancel = () =>{
        let Check = window.confirm("Do you want Exit Form")
        if (Check === true) {
            let path = '/';
            navigate(path);
        }        
    }
    // submit updateTask
    const onSubmitUpdateTask =(e) =>{
        e.preventDefault();    
        let newUpdate = [formUpdate]
        console.log(newUpdate);
        // localStorage.setItem("todos", JSON.stringify(newUpdate));
        // toast.success("Update success")
        // navigate("/");
    }
    return (
       <>
        <form className='form' onSubmit={onSubmitUpdateTask}>
            <h1>Update Item</h1>
        <div className="form__group">
            <label htmlFor="">title</label>
            <input 
            type="text" 
            name="title"
            value={formUpdate.title}
            onChange={handleChangeInput}
            />
            <span></span>
        </div>
        <div className="form__group">
            <label htmlFor="">Creator</label>
            <input 
            type="text"
            name="author"
            value={formUpdate.author}   
            onChange={handleChangeInput}
            />
            <span></span>
        </div> 
        <div className="form__group">
            <label htmlFor="">description</label>
            <input 
                type="text"
               name="description"
               value={formUpdate.description}   
               onChange={handleChangeInput}
            />
            <span></span>
        </div> 
        <div 
        className="form__checkBox"
        >
            <label >Status</label>    
            <input id="radio" name="status"  value={formUpdate.status} type="radio" />New
            <input id="radio" name="status"  value={formUpdate.status} type="radio" />Doing  
            <input id="radio" name="status"  value={formUpdate.status}  type="radio" />Done  
        </div>
        <div className="form__submit">
            <input type="submit" value={'Update'}
            /> 
            <input type="button" value={'Cancel'}
            onClick={handleCancel}
            />  
        </div>
    </form> 
       </>
    );
}

export default FormUpdateTask;