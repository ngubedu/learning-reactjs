import React from 'react';
import Button from '../../components/common/Button';
import SearchForm from '../../components/SearchForm';
import { Link } from "react-router-dom";
import './styles.scss';

const Header = (props) => {


  return (
    <header className="header">
     <Link to={'/add-newtask'}>
     <Button 
      className={"button__create"}
        name ="Create New Task"
        />
     </Link>
      <SearchForm />
    </header>
  );
};


export default Header;
