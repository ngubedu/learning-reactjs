import React from 'react';
function InputText({name,type,value,id,placeholder,onChange,onClick}) {
    return (
        <>
            <input type={type} value={value} name={name} id={id} placeholder={placeholder} onChange={onChange} onClick={onClick}/>
        </>
    );
}

export default InputText;