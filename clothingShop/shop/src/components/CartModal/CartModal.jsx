import React from 'react';
import Button from '../common/Button/Button';
import './styles.scss'
function CartModal(props) {
    return (
        <div className='cartModal hide'>         
            <div className='cartContent'>
                <div className='cartContent__title'>
                    <p>Shop Cart</p>
                    <Button nameBtn={"X"}/>
                </div>
                <div className='cartContent__main'>

                </div>
            </div>
        </div>
    );
}

export default CartModal;