import React from 'react';
import Card from './CardList/Card';
import Pagination from './Pagination/Pagination';

SidebarMain.propTypes = {
    
};

function SidebarMain(props) {
    return (
        <div className='sidebar__main'>
           <Card></Card>
           <Card></Card>
           <Card></Card>
           <Card></Card>
           <Card></Card>
           <Card></Card>
           <Card></Card>
           <Card></Card>
           <Card></Card>
           <Card></Card>
           <Card></Card>
           <Card></Card>
           
          <Pagination></Pagination>
        </div>
    );
}

export default SidebarMain;