import React, { useEffect, useState } from 'react'
import FoodItem from '../FoodItem/FoodItem'
import "./style.css"

function FoodList() {
const [foodList,setFoodList] = useState([])
const [isLoad,setIsLoad]  = useState(false)
useEffect(() =>{
    setIsLoad(true)
    const data = localStorage.getItem('foods')? JSON.parse(localStorage.getItem('foods')): [];
    setFoodList(data)
},[isLoad])
  return (
    <>

        <div className="food__list">
           <div className='table'>
            <div className="table__title">
                <h3>List Food</h3>
            </div>
           <table >
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    foodList.map((data,index) => (
                    <FoodItem
                        index={index}
                        food={data}
                        key={data.id}
                    />
                    ))
                }
                </tbody>
            
            </table>
           </div>
        </div>
    </>
  )
}

export default FoodList
