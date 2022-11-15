import React from 'react';
import './styles.scss';

const InputText = ({handleOnchange,inputClassName,placeholder,id,name,type,value}) => {
  return (
    <>
    <input 
    id={id}
    name={name}
    type={type}
    value={value}
    className={inputClassName}
    placeholder= {placeholder}
    onChange={handleOnchange}/> 
    </>
  );
};


export default InputText;
