import React from 'react';
function Button({nameBtn,OnClick,className,iconBtn}) {
    return (
        <>
        <button
        className ={className}
        onClick={OnClick}
        >
            {iconBtn}
            {nameBtn}
        </button>
        </>
    );
}
export default Button;