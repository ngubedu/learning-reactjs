import React from 'react'


function InputText({name,type,value,id,placeholder,onChange,onClick,disabled,onBlur}) {
  return (
    <>
        <input type={type} value={value} name={name} id={id} placeholder={placeholder} onChange={onChange} onClick={onClick} disabled={disabled} onBlur={onBlur}/>
    </>
  )
}



export default InputText
