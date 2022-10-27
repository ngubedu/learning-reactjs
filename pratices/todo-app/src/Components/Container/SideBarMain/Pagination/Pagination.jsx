import React from 'react';

Pagination.propTypes = {};
function Pagination(props) {
    return (
        <>
        <div className='pagination'>
            <ul className='item__list'>
                <li className='item__page'><i class="fa-solid fa-angle-left"></i></li>
                <li className='item__page'>1</li>
                <li className='item__page'>2</li>
                <li className='item__page'>3</li>
                <li className='item__page'><i class="fa-solid fa-angle-right"></i></li>
            </ul>
        </div>
        </>
    );
}
export default Pagination;