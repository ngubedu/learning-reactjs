import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import Button from '../common/Button/Button';
import './index.scss'
function ProductItems({product}) {

    let qty = 1;
    const addToCart = async(name,price,image) =>{
        toast.success("Thêm vào giỏ hàng thành công  " + name)
        let isExisting = false;
      const result = await axios.get("http://localhost:9000/orderproduct")
      if (result.data.length === 0) {
        const order = {name: name , price: price , image: image , qty: qty };
        axios.post("http://localhost:9000/orderproduct",order)
      }else{
        result.data.map((orderProduct) =>{
          if(name === orderProduct.name){
            orderProduct.qty += 1;
            const order = {
                name: name,
                price : price,
                image: image,
                qty: orderProduct.qty,
            };
            axios.put(`http://localhost:9000/orderproduct/${orderProduct.id}`,order)
            isExisting = true;
          }
        })
        if (isExisting === false) {
            const  order = {
                name: name,
                price: price,
                image: image,
                qty:qty,
            };
            axios.post("http://localhost:9000/orderproduct" , order) ;
        }
      }
    }
    return (
        <>
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
                    OnClick ={() =>addToCart(product.name,product.price,product.image)}
                    />
                </div>     
           </div>
        </div>
       
        </>
    );
}
export default ProductItems;