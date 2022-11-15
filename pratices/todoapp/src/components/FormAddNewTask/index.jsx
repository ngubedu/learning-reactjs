import React,{ useState } from 'react';
import { useNavigate } from "react-router-dom";
import { COLOR, Status } from '../datas/constains';
import {v4 as uuidv4} from 'uuid'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.scss';
import InputText from "../common/InputText"
const FormAddNewTask = (props) => {
    const data = localStorage.getItem('todos')? JSON.parse(localStorage.getItem('todos')): [];
    // create validate from 
    const [msgErrors, setMsgErrors] = useState({})
    // set object task gom các element chuoi: '';
    const  [tasks ,setTasks] = useState({
        id : uuidv4(),
        title: '',
        author: '',
        description:'',
        status: Status.NEW,
        color: COLOR.colorNew,
    }
    );
    // add envent onchange  value of input
    const onChangeText = (e) =>{
        setTasks((prev) =>({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    //  valid form
    const validateForm = () =>{ 
    const isCheckTitle = checkTitleAlreadyExist()
      const errors = {};
      if (!tasks.title) {
        errors.title = "* title is required"
      }
      if (isCheckTitle === true) {
        errors.title = "* Title Already Exist"
      }
      if (!tasks.author) {
        errors.author = "* Author is required"
      }
      if (!tasks.description) {
        errors.description = "* description is required"
      }
        setMsgErrors(errors)
        if(Object.keys(errors).length === 0){
            return true;
        }else{
            return false;
        }
    }
    // Check if the user already exists to show an alert or add localStore
    /**
     * dùng hàm map() để lọc các giá trị title trong mảng data và lưu vào trong mảng newTitleData
     * dùng includes để kiêm mản newTitleData khi người dùng nhập từ bàn phím nếu có dữ liệu trong mảng newTitleData thì trả về true, còn không có trả về false
     */
    const checkTitleAlreadyExist = () => {
        let newTitleData = data.map(newTitleData => newTitleData.title)
        if (newTitleData.includes(tasks.title)) {
            return true;
        }
    }
    // add event submit  form localStore 
    let navigate = useNavigate(); 
    const handleSubmit = (e) => {
        e.preventDefault();
           const isValid = validateForm();
           if (!isValid) {
                return;
           }
        // push data lên localStore   
            data.push(tasks);
            localStorage.setItem('todos', JSON.stringify(data));
            let path = '/';
            navigate(path);
            toast.success("Add new success")
    }
    return (
    <>
    <form className='form' onSubmit={handleSubmit}>
        <div className="form__group">
            <label htmlFor="title">title</label>
            <InputText
            type="text"
            name="title"
            id='title'
            value ={tasks.title}
            placeholder="Enter title"
            handleOnchange={onChangeText}
            />
            <span>{msgErrors.title}</span>
        </div>
        <div className="form__group">
            <label htmlFor="author">Creator</label>
            <InputText
            type="text"
            name="author"
            id='author'
            placeholder="Enter author"
            value ={tasks.author}
            handleOnchange={onChangeText}
            />
            <span>{msgErrors.author}</span>
        </div> 
        <div className="form__group">
            <label htmlFor="description">description</label>
            <InputText
            type="text"
            name="description"
            id='description'
            placeholder="Enter description"
            value ={tasks.description}
            handleOnchange={onChangeText}
            />
            <span>{msgErrors.description}</span>
        </div> 
        <div className="form__submit">
            <InputText 
            type="submit" value={'Save'}
            />
        </div>
    </form>
    </>
  );
};
export default FormAddNewTask;