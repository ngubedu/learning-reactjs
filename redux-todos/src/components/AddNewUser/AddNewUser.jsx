import React from 'react';
import Label from '../common/Label';
import InputText from '../common/InputText';
import { useFormik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { validate } from './validate';
import "./style.scss"
import { useDispatch, useSelector } from 'react-redux';
import { addNewUser } from '../UserList/UsersSlice';

function AddNewUser(props) {
   useSelector((state) => state.userList.users);
    const dispatch = useDispatch();
    //  handle onsubmit
    const onSubmit = (values) =>{
        dispatch(
            addNewUser({
                id: uuidv4(),
                name: values.name,
                address:values.address,
                date: new Date().toLocaleString(),
                phone:values.phone,
            })
        )
        resetForm()
    }
    // formik
    const {values,handleChange,handleBlur,handleSubmit,errors,touched,resetForm} = useFormik({
        initialValues:{
            id: uuidv4(),
            name: "",
            address:"",
            date: new Date().toLocaleString(),
            phone: '',
        },
        validate,
        onSubmit,
    })
    
    return (
        <div className='form'>
            <form action="" onSubmit={handleSubmit} >
                <div className="form__title" >
                    <p>Add New User</p>
                </div>
                <div className="form__group">
                    <Label nameLabel="name"/>
                    <InputText
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    onBlur ={handleBlur}
                    value={values.name}
                    />
                </div>
                  {errors.name && touched.name ? <span>{errors.name}</span> : null}  
                <div className="form__group">
                    <Label nameLabel="address"/>
                    <InputText
                    id="address"
                    name="address"
                    type="text"
                    onChange={handleChange}
                    onBlur ={handleBlur}
                    value={values.address}
                    />
                </div>
                    {errors.address && touched.address ? <span>{errors.address}</span> : null}
                <div className="form__group">
                    <Label nameLabel="Phone" />
                    <InputText 
                     id="phone"
                     name="phone"
                     type={"number"}
                     onChange={handleChange}
                     onBlur ={handleBlur}
                     value={values.phone}                 
                    />
                </div>
                    {errors.phone  && touched.phone? <span>{errors.phone}</span> : null}
                <div className='form__btn'>
                    <InputText type={"submit"} value={"Save"}/>
                </div>
            </form>
        </div>
    );
}

export default AddNewUser;