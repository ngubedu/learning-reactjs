import React from 'react';

function Button({onClick,nameBtn}) {
    return (
        <>
            <button onClick={onClick}>
                {nameBtn}
            </button>
        </>
    );
}

export default Button;