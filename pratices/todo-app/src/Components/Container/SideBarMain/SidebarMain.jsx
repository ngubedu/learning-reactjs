import React from 'react';
import CardList from './CardList/CardList';
import Pagination from './Pagination/Pagination';

SidebarMain.propTypes = {
    
};

function SidebarMain(props) {
    return (
        <div className='sidebar__main'>
            <CardList></CardList>
            <Pagination></Pagination>
        </div>
    );
}

export default SidebarMain;