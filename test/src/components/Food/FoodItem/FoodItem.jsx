import React from 'react'

function FoodItem({food,index}) {
  return (
   <>
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{food.name}</td>
            <td>{food.price}</td>
        </tr>        

   </>
  )
}



export default FoodItem
