import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../common/Button/Button';
import InputText from '../common/inputText/inputText';
import { STATUS_CODE, DollarUsd} from '../constants';
import orderProductApis from '../apis/orderProductApis';
import Image from '../common/image/Images';
import './styles.scss'

function CartModal({open,onClose}) {
    
    const [cartItem , setCartItem] = useState([])
    const [currentP, setCurrentP] = useState()
    const [total ,setTotal] = useState()
    const [isLoadData, setIsLoadData] = useState(false);

    let currentPrice = 0;
    let totalPrice = 0;
    
    const fetchData = async() =>{
       setIsLoadData(true)
        const response  = await orderProductApis.getAll()
        // Check status for post api
        if (response.status === STATUS_CODE.OK) {
            setCartItem(response.data)
        }else {
            alert('Get list failed.');
            console.log(response.status);
        }
        response.data.map((prices) => {
            // số Tiền  chưa thuế
            currentPrice += (prices.qty * Number(prices.price))
            return currentPrice
        });
        //  Tổng số tiền 
        totalPrice += (currentPrice + (currentPrice * 10 / 100))
        setCurrentP(currentPrice)
        setTotal(totalPrice)
    }
    //  delete item ID cart 
    const deleteOrder = async (orderID) =>{    
          await orderProductApis.delete(orderID)
            toast.success("Xóa Khỏi giỏ Hàng thành công")
            setIsLoadData(false); 
        }
    // handle button inDec and inc
    const inDec = async (qty,id,dec,name,price,image) => {
        setIsLoadData(false)
        if(dec === "dec"){
            qty -= 1;
            if(qty === 0){
                qty = 0;
                deleteOrder(id)
                return;
            }
        }else{
            qty +=1;  
        }
        const order = {name:name, price:price,qty:qty, image: image}
        await axios.put(`http://localhost:9000/orderproduct/${id}`, order)
    }
    // handle delete item in cart
    const handleClearItemCart = async () =>{
        const order = []
        setCartItem(order)
        // await axios.put(`http://localhost:9000/orderproduct/`)
        toast.success("Xóa Tất cả item trong giỏ hàng thành công")
        setIsLoadData(true)    
    }
    //  use useEffect
    useEffect(() => {
       fetchData();
    },[currentP,total,isLoadData])   

    if(!open) return null;
    return (
       <>
        <div className='cartModal' >         
            <div className='cartContent'>
                <div className='cartContent__title'>
                    <p>Shop </p>
                    <Button nameBtn={"X"}  OnClick={onClose}/>
                </div>
                {cartItem.length === 0 && <div className="todo__emptyItemCard"><p>Giỏ hàng is Empty</p></div>}
               {
                cartItem.length> 0 &&
                <div className='cartContent__main'>
                <div className='table'>
                    <table>
                       <thead>
                        <tr>
                                <th>Hình ảnh</th>
                                <th>Tên</th>
                                <th>Số lượng</th>
                                <th>Số Tiền</th>
                                <th >Tác vụ</th>
                        </tr>
                       </thead>
                       {cartItem.map((item, index) => (
                       <tbody className='tbl_data'  key ={index}>
                             <tr>
                                  <td><Image className='img__cart' src={item.image} alt=""/></td>
                               
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
                                  <td>{DollarUsd.format(item.qty * Number(item.price))}</td>
                                  <td> 
                                      <Button  nameBtn={<i className="fa-solid fa-trash-can"></i>} OnClick={() => deleteOrder(item.id)}/>
                                  </td>
                              </tr>                          
                       </tbody>
                       ))}
                    </table>
                    {cartItem.length > 0 && <div className="btn__clearCart"><Button OnClick={() =>handleClearItemCart()} nameBtn={"Clear Cart"}/></div>}           
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
                                    <p>{DollarUsd.format(currentP)} </p>
                                </div>
                                <div className='group'>
                                    <p>Thuế:</p> 
                                    <p>10%</p>
                                </div>
                                <div className='group'>
                                    <p>Tổng Tiền:</p> 
                                    <p>{DollarUsd.format(total)} </p>
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
               }
            </div>
        </div>
   
       </>
    );
}

export default CartModal;