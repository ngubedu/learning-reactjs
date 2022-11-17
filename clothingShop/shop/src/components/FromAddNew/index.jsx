import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import productApis from '../apis/productApis';
import InputText from '../common/inputText/inputText';
import { STATUS_CODE } from '../constants';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.scss'
function FormAddNew(props) {
    const defaultValues ={
        id: uuidv4(),
        name: '',
        price: '',
        image:'',
    }
    const [msgErrors, setMsgErrors] = useState({})
    const [products, setProducts] =useState(defaultValues)

    // const fetchData = async () => {
    //     const response = await productApis.getAll();
    //     // Check status for post api
    //     if (response.status === STATUS_CODE.OK) {
    //         setProducts(response.data);
    //     } else {
    //       toast.error('Get list failed.');
    //       console.log(response.status);
    //     }
    //     console.log("data" + response.data);
    // };
    // useEffect(() =>{
    //     fetchData()
    // },[])
    console.log(products);
    const onChangeText = (e) =>{
        setProducts((prev) =>({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    const validateForm = () =>{ 
          const errors = {};
        //   const isCheckName = checkTitleAlreadyExist()
          if (!products.name) {
            errors.name = "* name is required"
          }
        //   if (isCheckName === true) {
        //     errors.name = "* name Already Exist"
        //   }
          if (!products.price) {
            errors.price = "* price is required"
          }
          if (!products.image) {
            errors.image = "* image is required"
          }
            setMsgErrors(errors)
            if(Object.keys(errors).length === 0){
                return true;
            }else{
                return false;
            }
        }
        // const checkTitleAlreadyExist = () => {
        //     let newNameData = products.map(newNameData => newNameData.name)
        //     if (newNameData.includes(products.name)) {
        //         return true;
        //     }
        //     console.log("name:" + newNameData);
        // }
        
      
    let navigate = useNavigate(); 
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const isValid = validateForm();
        if (!isValid) return
        const response = await productApis.add(products);
        if (response.status === STATUS_CODE.CREATED ) {
            toast.success('Add new success');
            
        } else {
            toast.error(' Please try again.');
        }
        let path = '/';
        navigate(path);
        setProducts(products);
    }
    const HandleResetForm =(e) =>{
        setMsgErrors([])
        setProducts(defaultValues)
    }
    return (
        <div className='form'>
            <form  onSubmit={handleSubmit}>
            <div className="form__title">
                <h3>Thêm sản phẩm</h3>
            </div>
            <div className="form__group">
                <label htmlFor="">Name</label>
                <InputText 
                name="name"
                value={products.name}
                onChange={onChangeText}
                />
            </div>
            <span className='form__msgError'>{msgErrors.name}</span>
            <div className="form__group">
                <label htmlFor="">Price</label>
                <InputText 
                type="number"
                name="price"
                value={products.price}
                onChange={onChangeText}
                />
            </div>
            <span className='form__msgError'>{msgErrors.price}</span>
            <div className="form__group">
                <label htmlFor="">Image</label>
                <InputText 
                name="image"
                value={products.image}
                onChange={onChangeText}
                />
            </div>
            <span className='form__msgError'>{msgErrors.image}</span>
            <div className="form__btn">
                <InputText type={"submit"} value={"Save"}/>
                <InputText type={"reset"}
                    onClick={HandleResetForm}
                />
            </div>
        </form>
        </div>
    );
}

export default FormAddNew;