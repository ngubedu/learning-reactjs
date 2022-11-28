import React from 'react'
import { useSelector } from 'react-redux'
import User from '../User/User'
import { useListSelector } from "../../redux/selectors";
import './styles.scss';
function UserList() {
  const userList = useSelector(useListSelector)
  return (
    <>
        <div className='table'>
          <table className='table__content'>
              <thead>
                <tr>
                  <th>Tên</th>
                  <th>Địa Chỉ</th>
                  <th>Số Điện Thoại</th>
                  <th >Tác vụ</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((data) =>(
                  <User
                  user={data}
                  id={data.id}
                  key={data.id}
                />
            ))}
              </tbody>
          </table>
          {userList.length === 0 &&<div className="todo__emptyItem"><p>Data is Empty</p></div>}
        </div>
    </>
  )
}

export default UserList
