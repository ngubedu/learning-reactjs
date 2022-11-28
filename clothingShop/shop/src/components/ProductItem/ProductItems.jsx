import React from 'react';
import Button from '../common/Button/Button';
import Image from '../common/image/Images';
import {DollarUsd } from '../constants';
import './index.scss'

function ProductItems({product,onHandleAdd,handleDelete,}) {
    const handleAddOrder = async () =>{     
      onHandleAdd(product.id)
    }
    const OnDelete = async(productID) =>{
        handleDelete(productID)
    }
    return (
        <>
        <div className='card'>
           <div className="card__content">
            <div className='card__btnClose' onClick={OnDelete}>x</div>
                <div className='card__img'>
                   <Image 
                   src={product.image}
                   alt=""
                   />
                    </div>
                <div className='card__infor'>
                    <h3>{product.name}</h3>
                    <p>{DollarUsd.format(product.price)}</p>
                    <Button 
                    nameBtn={"Add to Card"} 
                    OnClick ={handleAddOrder}
                    />
                </div>     
           </div>
        </div>
       
        </>
    );
}
export default ProductItems;