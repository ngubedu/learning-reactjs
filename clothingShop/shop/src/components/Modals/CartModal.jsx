
import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../common/Button/Button';
import InputText from '../common/inputText/inputText';
// import {DataContext} from '../Contexts/DataConText'
import './styles.scss'

function CartModal({open,onClose}) {
    // const dataContext = useContext(DataContext) 

    const [cartItem , setCartItem] = useState([])
    const [currentP, setCurrentP] = useState()
    const [total ,setTotal] = useState()
     useEffect(() => {
        fetchData();
     },[currentP,total])   

     let currentPrice = 0;
     let totalPrice = 0;
     const fetchData = async() =>{
        const result = await axios.get("http://localhost:9000/orderproduct")
        setCartItem(result.data)
        result.data.map((prices) => {
            currentPrice += (prices.qty * Number(prices.price))
            totalPrice += (currentPrice + (currentPrice * 10 / 100))
            return totalPrice
        });
        setCurrentP(currentPrice.toFixed(2))
        setTotal(totalPrice.toFixed(2))
     }
     const deleteOrder = async (id) =>{
        let isDelete = window.confirm("do you want remove item")
        if (isDelete) {
            await axios.delete(`http://localhost:9000/orderproduct/${id}`)
            toast.success("Xóa Khỏi giỏ Hàng thành công")
            fetchData();
        }
     }
     const inDec = async (qty,id,dec,name,price,image) => {
        if(dec === "dec"){
            if(qty===1){
                qty =1;
            }else{
                qty -= 1;
            }
           
        }else{
            if(qty === 10){
                qty= 10;
                toast.error("Hết hàng")
                return
            }else{
                qty += 1;
            }
        }
        const order = {name:name, price:price,qty:qty, image: image}
        await axios.put(`http://localhost:9000/orderproduct/${id}`, order)
        fetchData();
     }
    if(!open) return null;
    return (
       <>
        <div className='cartModal' >         
            <div className='cartContent'>
                <div className='cartContent__title'>
                    <p>Shop </p>
                    <Button nameBtn={"X"}  OnClick={onClose}/>
                </div>
                <div className='cartContent__main'>
                    <div className='table'>
                        <table cellspacing="0">
                           <tr>
                                <th>Hình ảnh</th>
                                <th>Tên</th>
                                <th>Số lượng</th>
                                <th>Số Tiền</th>
                                <th >Tác vụ</th>
                           </tr>
                           <tbody className='tbl_data'>
                           {cartItem.map((item, index) => (
                                 <tr  key ={index}>
                                      <td><img className='img__cart' src={item.image} alt="" /></td>
                                      <td>{item.name}</td>
                                      <td className='qty'>
                                          <Button nameBtn={"-"}
                                          OnClick={() =>
                                                inDec(item.qty, item.id,"dec", item.name,item.price,item.image)
                                        }
                                          />
                                          <InputText type={"number"} value={item.qty} disabled/>
                                          <Button nameBtn={"+"}
                                          OnClick={() =>
                                            inDec(item.qty, item.id,"inc", item.name,item.price,item.image)
                                    }
                                          />
                                      </td>
                                      <td>{(item.qty * Number(item.price)).toFixed(2)} $</td>
                                      <td> 
                                          <Button  nameBtn={<i className="fa-solid fa-trash-can"></i>} OnClick={() => deleteOrder(item.id)}/>
                                      </td>
                                  </tr>                          
                           ))}
                           </tbody>
                        </table>
                        {cartItem.length === 0 &&<div className="todo__emptyItemCard"><p>Giỏ hàng is Empty</p></div>}
                    </div>
                        <div className='cart__bottom'>
                            <div className='payment__config'>
                                <div className="payment__config--title">
                                    <p>Phương Thức Vận Chuyển</p>
                                </div>
                                <div className='payment__config--content'>
                                    <InputText type={"radio"} disabled/>
                                    <label htmlFor="">Cod</label>
                                </div>
                            </div>
                            <div className='orderSummary'>
                                <div className="payment__config--title">
                                    <p>Order Summary</p>
                                </div>
                                <div className='orderSummary__content'>
                                <div className='group'>
                                        <p>Tiền Chưa thuế</p> 
                                        <p>{currentP} $</p>
                                    </div>
                                    <div className='group'>
                                        <p>Thuế:</p> 
                                        <p>10%</p>
                                    </div>
                                    <div className='group'>
                                        <p>Tổng Tiền:</p> 
                                        <p>{total} $</p>
                                    </div>
                                    <div className='btn__order'>
                                       <Link to={"/bill-cart"}>
                                            <Button nameBtn={"Thanh toán"} OnClick={onClose}/>
                                       </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
   
       </>
    );
}

export default CartModal;