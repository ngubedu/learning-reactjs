import './style.scss'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from '../common/Button/Button';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function BillCarts(props) {
    
    const [cartItem , setCartItem] = useState([])
    const [currentP, setCurrentP] = useState()
    const [total ,setTotal] = useState()
    useEffect(() => {
        getData();
     },[currentP,total])   

     let currentPrice = 0;
     let totalPrice = 0;
    const getData = async() =>{
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
     let navigate = useNavigate(); 
     const handleClick = async () =>{
        // let order = [];
        // await axios.put("http://localhost:9000/orderproduct",order)
        toast.success("Thanh toán thành công")
        let path = '/';
        navigate(path);
     }
    return (
        <>
            
            <div className="Bill">
                <div className="Bill__title">
                    <h3>Hóa Đơn</h3>
                </div>
                <div className="Bill__content">
                    <div className="group__item">
                        <p>Sản phẩm</p>
                        <p> Áo  x {cartItem.length} </p>
                    </div>

                    <div className="total__price">
                        <div className="curent__price">
                        <p>Tiền chưa thuế</p>
                        <p>{currentP}</p>
                        </div>
                        <div className="curent__price">
                        <p>Thuế</p>
                        <p>10%</p>
                        </div>
                        <div className="curent__price">
                        <p> Tổng Tiền</p>
                        <p>{total}$</p>
                        </div>
                    </div>
                    <div className='btn__payment'>
                        <Button nameBtn={"Thanh Toán"} OnClick={handleClick}/>
                    </div>

                </div>
            </div>
        </>
    );
}

export default BillCarts;