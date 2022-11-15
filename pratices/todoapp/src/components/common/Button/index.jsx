import React from 'react';

import './styles.scss';

const Button = ({name,handleClick,className}) => {

  return( 
    <>
    <button className={className}
    onClick={handleClick}
    >
      {name} 
    </button>
    </>
  )
};
export default Button;
