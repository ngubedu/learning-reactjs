import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import User from '../User/UserItem'
// import {  useHistory } from "react-router-dom";
import { useListSelector } from "../../redux/selectors";
import { fetchUsers,deleteUser } from './UsersSlice';
import './styles.scss';
import UpdateUser from '../Modal/UpdateUser/UpdateUser';

function UserList() {
  const [modal,setModal] = useState(false)
  const [isLoad, setIsLoad] = useState(false)
  // let history = useHistory(); 
  const userList = useSelector(useListSelector)
  const dispatch = useDispatch();
// useEffect get apis
  useEffect(() => {
    setIsLoad(true)
    dispatch(fetchUsers());
  },[dispatch,isLoad])
// handle deleteitem
 const handleDeleteItem = (userId) =>{
    const checkDeleteItem = window.confirm("Do you want delete this user ?")
    if(checkDeleteItem){
      dispatch(deleteUser(userId))
      setIsLoad(false)
    }
 }
//  handleShowUpdate
const handleUpdate = () => {
  setModal(true)
  setIsLoad(false)
}
  return (
    <>
        <div className='table'>
          <table className='table__content'>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên</th>
                  <th>Địa Chỉ</th>
                  <th>Số Điện Thoại</th>
                  <th >Tác vụ</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((data,index) =>(
                  <User
                  index={index}
                  user={data}
                  id ={data.id}
                  key={data.id}
                  handleDeleteItem={handleDeleteItem}
                  handleShowUpdate={handleUpdate}
                />
            ))}
              </tbody>
          </table>
          {userList.length === 0 &&<div className="todo__emptyItem"><p>Data is Empty</p></div>}
        </div>
       {modal && <UpdateUser closeModal={setModal} userObj={userList} />}
    </>
  )
}

export default UserList
