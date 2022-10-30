
import React from 'react';

import './style.scss';

const Form = (props) => {
  return (
    <>
    <form className='form'>
        <div className="form__group">
            <label htmlFor="">title</label>
            <input type="text" defaultValue={"task1"}/>
        </div>
        <div className="form__group">
            <label htmlFor="">Creator</label>
            <input type="text" defaultValue={"Author 1 "} />
        </div> 
        <div className="form__group">
            <label htmlFor="">Desscription</label>
            <input type="text" defaultValue={"This is a task "}/>
        </div> 
 
        <div className="form__group">
            <label htmlFor="">Status
            </label>
            <select name="" id="">
                <option value="new">new</option>
                <option value="Dongin">Dongin</option>
                <option value="Done">Done</option>
            </select>
        </div>
        <div className="form__submit">
            <input type="submit" /> 
      
        </div>
    </form>
    </>
  );
};

Form.propTypes = {};

export default Form;