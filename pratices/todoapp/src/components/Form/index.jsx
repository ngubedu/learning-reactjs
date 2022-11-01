import React from 'react';
import { useState } from 'react';
import { Status } from '../datas/constains';
import './style.scss';

const Form = (props) => {
    // const [msgs, setMsgs] =useState({
    //     msgTitle:"",
    //     msgAuthor:"",
    //     msgDessctrition:"",
    // })

    const  [tasks ,setTasks] = useState({
        title: '',
        author: '',
        dessctription:'',
        status: Status.NEW,
    }
    );
    // formValidation form
    const formValidation = () => {
        if (tasks.title === "") {
            alert("xin moi nhap title")
            return
        }
        if (tasks.author === "") {
            alert("xin moi nhap author")
            return
        }
        if (tasks.dessctription === "") {
            alert("xin moi nhap dessctription")
            return
        }
    }
    const onChangeText = (e) =>{
     setTasks((prev) =>({
         ...prev,
         [e.target.name]: e.target.value,
     }))
     console.log(tasks);
 
    }
    // button submit form 
    const handleSubmit = (e) => {
        e.preventDefault();
        formValidation()

        console.log("click");
        // save to localStore
    }
    return (
    <>
    <form className='form'>
        <div className="form__group">
            <label htmlFor="">title</label>
            <input type="text" 
            name="title"
            value={tasks.title}
            onChange = {onChangeText}
            />
            {/* <span>{msgs.msgTitle}</span> */}
        </div>
        <div className="form__group">
            <label htmlFor="">Creator</label>
            <input 
                type="text"  
                name="author"
                value={tasks.author}
               onChange = {onChangeText}
            />
             {/* <span>{msgs.msgAuthor}</span> */}
        </div> 
        <div className="form__group">
            <label htmlFor="">dessctription</label>
            <input type="text"
            name="dessctription"
            value={tasks.dessctription}
            onChange = {onChangeText}
            />
             {/* <span>{msgs.msgDessctrition}</span> */}
        </div> 
        <div className="form__submit">
            <input type="submit" onClick={handleSubmit}/> 
        </div>
    </form>
    </>
  );
};

Form.propTypes = {};

export default Form;