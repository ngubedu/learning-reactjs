import React from 'react'
import './styles.scss'
import Button from '../common/Button' 
import { useDispatch } from 'react-redux';
import { usersListSlice } from '../UserList/UsersSlice';

function User({user,id}) {
  const dispatch = useDispatch();

  const handleDelete =() =>{
    dispatch(
      usersListSlice.actions.deleteUser(id)
    )
  }
  return (
    <>
       <tr>
            <td>{user.name}</td>
            <td>{user.address}</td>
            <td>{user.phone}</td>
            <td>
                <Button  
                nameBtn={<i className="fa-solid fa-trash-can"></i>}
                onClick={handleDelete}
                />
            </td>
       </tr>
    </>
  )
}



export default User
