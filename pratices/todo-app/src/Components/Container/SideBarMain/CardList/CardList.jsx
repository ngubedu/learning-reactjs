import React from 'react';
import Card from "../CardList/Card/Card"

Card.propTypes = {
    
};

function CardList(props) {
  const nemBerCard =[
    {
      title:"task1",
      creator:"author 1",
      status:"new",
      desscription: "This is a task, This is a task, This is a task,...",
    },
    {
      title:"task2",
      creator:"author 1",
      status:"new",
      desscription: "This is a task, This is a task, This is a task,...",
    },
    {
      title:"task3",
      creator:"author 1",
      status:"new",
      desscription: "This is a task, This is a task, This is a task,...",
    },
    {
      title:"task4",
      creator:"author 1",
      status:"doing",
      desscription: "This is a task, This is a task, This is a task,...",
    },
    {
      title:"task6",
      creator:"author 1",
      status:"new",
      desscription: "This is a task, This is a task, This is a task,...",
    },  {
      title:"task7",
      creator:"author 1",
      status:"new",
      desscription: "This is a task, This is a task, This is a task,...",
    },  {
      title:"task8",
      creator:"author 1",
      status:"new",
      desscription: "This is a task, This is a task, This is a task,...",
    },  {
      title:"task9",
      creator:"author 1",
      status:"new",
      desscription: "This is a task, This is a task, This is a task,...",
    },  {
      title:"task10",
      creator:"author 1",
      status:"new",
      desscription: "This is a task, This is a task, This is a task,...",
    },
    {
      title:"task11",
      creator:"author 1",
      status:"new",
      desscription: "This is a task, This is a task, This is a task,...",
    },
    {
      title:"task12",
      creator:"author 1",
      status:"new",
      desscription: "This is a task, This is a task, This is a task,...",
    },
    {
      title:"task13",
      creator:"author 1",
      status:"new",
      desscription: "This is a task, This is a task, This is a task,...",
    },
   
  ]
 
    return (
      <>
      <div className="card__list">
        {nemBerCard.map((data,index)=>(
              <Card
              key={index}
              title ={data.title}
              creator ={data.creator}
              status ={data.status}
              desscription ={data.desscription}
              />
              ))}
        </div>
      </>
    );
}

export default CardList;