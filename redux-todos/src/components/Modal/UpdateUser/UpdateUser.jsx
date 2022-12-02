import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../../common/Button'
import InputText from '../../common/InputText'
// import { useDispatch } from 'react-redux'
// import { updateUser } from '../../UserList/UsersSlice'
import './style.scss'
import userApis from '../../../apis/userApis'

function UpdateUser({closeModal}) {
  const location = useLocation()
  const {user} = location.state

  // const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(user);

  const handleOnChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUpdate = async (e) =>{
    e.preventDefault()
    await userApis.update(formValues);
    closeModal(false)
    window.location.reload()
    // dispatch(updateUser({
    //   name: formValues.name,
    //   address:formValues.address,
    //   date: new Date().toLocaleString(),
    //   phone:formValues.phone,
    // }))
  } 

  return (
    <div className='modal'>
      <div className="modal__content">
        <div className="modal__title">
          <p>Thông Tin User: {formValues.name}</p>
          <Button nameBtn={"x"} onClick={() => closeModal(false)}/>
        </div>
        <form className="form__update" onSubmit={handleSubmitUpdate}>
          <div className="form__group">
            <label htmlFor="">Name</label>
            <InputText
            name={"name"}
            type="text"
            value={formValues.name}
            onChange={handleOnChange}
            />
          </div>
          <div className="form__group">
            <label htmlFor="">Address</label>
            <InputText
              name={"address"}
              type="text"
               value={formValues.address}
               onChange={handleOnChange}
            />
          </div>
          <div className="form__group">
            <label htmlFor="">Phone</label>
            <InputText
               name={"phone"}
               type="number"
               value={formValues.phone}
               onChange={handleOnChange}
            />
          </div>
          <div className="form__btn">
            <InputText type={"submit"} value={"Update"}/>
            <InputText type={"button"} value={"Cancel"} onClick={() => closeModal(false)}/>
          </div>
        </form>
      </div>
    </div>
  )
}


export default UpdateUser
