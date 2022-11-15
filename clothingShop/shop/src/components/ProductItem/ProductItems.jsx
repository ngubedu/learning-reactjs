import React from 'react';
import { toast } from 'react-toastify';
import Button from '../common/Button/Button';
import './index.scss'
function ProductItems({product}) {
    const OnClickAddCard = ()=> {
        toast.success("Thêm vào giỏ hàng thành công:  " + product.name)
      
    }
    return (
        <div className='card'>
           <div className="card__content">
                <div className='card__img'>
                    <img 
                    src={product.image}
                    alt="" 
                    />
                    </div>
                <div className='card__infor'>
                    <h3>{product.name}</h3>
                    <p>{product.price} $</p>
                    <Button 
                    nameBtn={"Add to Card"} 
                    OnClick ={OnClickAddCard}
                    />
                </div>     
           </div>
        </div>
    );
}

export default ProductItems;