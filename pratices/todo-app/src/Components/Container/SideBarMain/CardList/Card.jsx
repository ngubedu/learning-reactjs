import React from 'react';


Card.propTypes = {
    
};

function Card(props) {
    return (
        <div className='card'>
            <div className="card__infor">
                <h5 className=''>Title : Task1</h5>
                <p>Creator: Author 1</p>
                <p>Status: New</p>
            </div>
            <div className="card__desscription">
                <h5>Desscription</h5>
                <p>This is a task, This is a task, This is a task,...</p>
            </div>
            <div className="card__btn">
                <button>New</button>
            </div>
        </div>
    );
}

export default Card;