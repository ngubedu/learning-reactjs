import React, { useState } from 'react'
import "./style.css"
import {v4 as uuidv4} from 'uuid'

function AddNewFood(props) {
    const data = localStorage.getItem('foods')? JSON.parse(localStorage.getItem('foods')): [];
    const valueDefault ={    
            id: uuidv4(),
            name:"",
            price:"",     
    }
    const [formValues, setFormValues] = useState(valueDefault)
    const [msgErrors, setMsgErrors] = useState({})
    const handleChange = (e) =>{
        setFormValues((prev) =>({
            ...prev,
            [e.target.name]: e.target.value,
        }))
        console.log(formValues);
    }
    const validateForm =() =>{
        const errors = {};
        if (!formValues.name) {
          errors.name = "* name is required"
        }
        if (!formValues.price) {
          errors.price = "* price is required"
        }
          setMsgErrors(errors)
          if(Object.keys(errors).length === 0){
              return true;
          }else{
              return false;
          }

    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        const isValid = validateForm();
        if (!isValid) {
             return;
        }
        data.push(formValues);
        localStorage.setItem('foods', JSON.stringify(data));
        setFormValues(valueDefault)
    }
  return (
    <>
        <div className="form">
            <form action="" onSubmit={handleSubmit}>
                <div className="form__title">
                <h3> Add new food</h3>
                </div>
                <div className="form__group">
                    <label htmlFor="">Name</label>
                    <input type="text" name='name' value={formValues.name} onChange={handleChange} />
                </div>
                   <div className='error'><p>{msgErrors.name}</p></div>
                <div className="form__group">
                    <label htmlFor="">Price</label>
                    <input type="number" name='price' value={formValues.price} onChange={handleChange}/>
                </div>
                <div className='error'><p>{msgErrors.price}</p></div>
                <div className='form__btn'>
                    <input type="submit"  value={"Add"}/>
                </div>
            </form>
        </div>
    </>
  )
}


export default AddNewFood
