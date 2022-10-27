import React from 'react';

Card.propTypes = {
    
};

function Card(props) {
    const {title,creator,status,desscription} = props;
    return (
        <>
        <div className='card'>
            <div className="card__infor">
                <h5 className=''>Title : {title}</h5>
                <p>Creator: {creator}</p>
                <p>Status: {status}</p>
            </div>
            <div className="card__desscription">
                <h5>Desscription</h5>
                <p>{desscription}</p>
            </div>
            <div className="card__btn">
                <button>New <i class="fa-solid fa-chevron-down"></i></button>
            </div>
        </div>
        </>
    );
}

export default Card;