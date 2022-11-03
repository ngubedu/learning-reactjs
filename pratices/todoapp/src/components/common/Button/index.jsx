import React from 'react';

import './styles.scss';

const Button = ({name,onClickButton}) => {
 const handleClickBtnCreateNewTask = () =>{
  onClickButton();
 }
  return( 
    <>
    <button className="btn" 
    onClick={handleClickBtnCreateNewTask}
    >
      {name} 
    </button>
    </>
  )
};
export default Button;
