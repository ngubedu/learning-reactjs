import React from 'react';
import InputText from '../common/InputText';
import Button from '../common/Button';
import { useState,useEffect } from 'react';

const SearchForm = (props) => {
  const [searchItem, setSearchItem] = useState("") 
  useEffect(() =>{
    const datas = localStorage.getItem('todos')? JSON.parse(localStorage.getItem('todos')): [];
    setSearchItem(datas)
  },[])

  const onChangeInputValue =(e) =>{
    setSearchItem(() => ({
      [e.target.name]: e.target.value,
    }))
  }

  const onClickBtn =(e) =>{
    e.preventDefault();
    console.log(searchItem);
  }
  return (
    <div>
      <InputText 
      inputClassName="input__search"
       placeholder="Type Search Something"
      handleOnchange={onChangeInputValue}
      />
      <Button 
      className={"button__create"}
      name="Search"
      type = "submit"
      onClickButton={onClickBtn}
      />
    </div>
  );
};
export default SearchForm;
