import React from 'react';
import Card from './CardList/Card';

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
          
        </div>
    );
}

export default SidebarMain;