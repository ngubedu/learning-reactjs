import React from 'react';


SideBar.propTypes = {};
function SideBar(props) {
    return (
        <div className='sidebar__sidebar'>
            <ul className='list__item'>
                <li className='item__link'>All Task</li>
                <li className='item__link'>New Task</li>
                <li className='item__link'>Doing Task</li>
                <li className='item__link'>Done Task</li>
            </ul>
        </div>
    );
}

export default SideBar;