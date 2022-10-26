import React from 'react';
import Card from "../CardList/Card/Card"

Card.propTypes = {
    
};

function CardList(props) {
    return (
       <div className="card__list">
         <Card></Card>
         <Card></Card>
         <Card></Card>
         <Card></Card>
         <Card></Card>
         <Card></Card>
         <Card></Card>
         <Card></Card>
         <Card></Card>
         <Card></Card>
         <Card></Card>
         <Card></Card>
       </div>
    );
}

export default CardList;