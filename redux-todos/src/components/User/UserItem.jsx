import React from 'react'
import './styles.scss'
import Button from '../common/Button' 
import { Link } from 'react-router-dom'

function User({user,handleDeleteItem,index,handleShowUpdate}) {
  // 
  const handleDelete =() =>{
    handleDeleteItem(user.id)
  }
  const handleUpdateItem =() =>{
    handleShowUpdate(user.id)
  }
  return (
    <>
       <tr key={user.id}>
            <td >{index + 1}</td>
            <td >{user.name}</td>
            <td>{user.address}</td>
            <td>{user.phone}</td>
            <td>
              <Link className='item__link' to={`/`} state={{ user: user }}>
               <Button  
                nameBtn={<i className="fa-sharp fa-solid fa-pen-to-square"></i>}
                onClick ={() =>handleUpdateItem(user.id)}
                />
              </Link>
                <Button  
                nameBtn={<i className="fa-solid fa-trash-can"></i>}
                onClick={() =>handleDelete(user.id)}
                />
            </td>
       </tr>
    </>
  )
}



export default User
