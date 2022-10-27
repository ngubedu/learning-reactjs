import React from 'react';
import CreateNewTask from './CreateNewTask/CreateNewTask';
import Search from './SearchInput/Search';
import "../UI/Style.css"


Header.propTypes = {
    
};

function Header(props) {
    return (
        <>
        <div className='header'>
        <CreateNewTask></CreateNewTask>
        <Search></Search>
        </div>
        
        </>
    );
}

export default Header;