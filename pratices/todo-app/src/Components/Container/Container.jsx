import React from 'react';

import SideBar from './SideBar/SideBar';
import SidebarMain from './SideBarMain/SidebarMain';

Container.propTypes = {
    
};

function Container(props) {
    return (
        <div className='container'>
            <SideBar></SideBar>
            <SidebarMain></SidebarMain>
        </div>
    );
}

export default Container;