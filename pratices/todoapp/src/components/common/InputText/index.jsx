import React from 'react';

import './styles.scss';

const InputText = ({inputValue, onChangeText}) => {

  return (
    <>
    <input className="input-text" placeholder="Type something to search" />  
    
    {/* <input type="text" value={inputValue} name="title" onChange={onChangeText}/>  */}
    </>

  );
};

InputText.propTypes = {};

export default InputText;
