import React,{ useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Status } from '../datas/constains';
import {v4 as uuidv4} from 'uuid'
import './style.scss';

const FormAddNewTask = (props) => {
    const data = localStorage.getItem('todos')? JSON.parse(localStorage.getItem('todos')): [];
    // set object task gom các element chuoi: '';
    const  [tasks ,setTasks] = useState({
        id : uuidv4(),
        title: '',
        author: '',
        dessctription:'',
        status: Status.NEW,
    }
    );
    // add envent onchange  value of input
    const onChangeText = (e) =>{
     setTasks((prev) =>({
         ...prev,
         [e.target.name]: e.target.value,
     }))
    }
    const validateForm = () =>{ 
    }
    // add event ónubmit submit form localStrore and next page 
    let navigate = useNavigate(); 
    const handleSubmit = (e) => {
        e.preventDefault();
        // validate form
        validateForm();
        data.push(tasks);
        localStorage.setItem('todos', JSON.stringify(data));
        // alert("Add new success")
        // next page
        let path = '/';
        navigate(path);
    }
    return (
    <>
    <form className='form' onSubmit={handleSubmit}>
        <div className="form__group">
            <label htmlFor="">title</label>
            <input type="text" 
            name="title"
            value={tasks.title}
            onChange={onChangeText}
            />
        </div>
        <div className="form__group">
            <label htmlFor="">Creator</label>
            <input 
                type="text"  
                name="author"
                value={tasks.author}
               onChange={onChangeText}
            />
        </div> 
        <div className="form__group">
            <label htmlFor="">dessctription</label>
            <input type="text"
            name="dessctription"
            value={tasks.dessctription}
            onChange={onChangeText}
            />
        </div> 
        <div className="form__submit">
            <input type="submit" value={'Save'}/> 
        </div>
    </form>
    </>
  );
};



export default FormAddNewTask;