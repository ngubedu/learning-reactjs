import React, { useState,useEffect } from 'react';
import ProductItems from '../ProductItem/ProductItems';
import productApis from '../apis/productApis';
import Button from '../common/Button/Button';
import orderProductApis from '../apis/orderProductApis';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { STATUS_CODE } from '../constants';
import { Link } from 'react-router-dom';
import './styles.scss'
// import CartModal from '../../components/Modals/CartModal'

function Product(props) {
    // const [modal,setModal] = useState(false)
    const [productList, setProductList] = useState([])
    const [isLoad , setIsLoad] = useState(false)
    
    const fetchData = async () => {
        setIsLoad(true)
        const response = await productApis.getAll();
        // Check status for post api
        if (response.status === STATUS_CODE.OK) {
            setProductList(response.data);
        } else {
            toast.error('Get list failed.');
            console.log(response.status);
        } 
      };
    const handleAddOrder = async (name,price,image) =>{
        setIsLoad(false)
        let qty = 1;
        toast.success("Thêm vào giỏ hàng thành công  " + name)
        let isExisting = false;
      // get api 
      const result = await orderProductApis.getAll()
      if (result.data.length === 0) {
        const order = {name: name , price: price , image: image , qty: qty };
        await orderProductApis.add(order)
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
            await orderProductApis.add(order);
        }
    } 
    
    }
    const DeleteItemProduct = async(productID) =>{
      await productApis.delete(productID)
      // toast.success("Xóa Khỏi giỏ Hàng thành công")
      setIsLoad(false); 
    }
      useEffect(() => {
        fetchData();
      },[isLoad]); 
    return (
        <>
        <div className='main-product'>
            <div className='total'>
                <p><b>Total:</b> {productList.length}</p>
                <Link to={'/add-new'}>
                    <Button className="total__btn" iconBtn={<i className="fa-solid fa-plus"></i>} nameBtn="ADD"/>
                </Link>
            </div>
            {productList.length === 0 &&<h1 className="todo__emptyItem">Không có sản phẩm nào được thêm vào</h1>}
            <div className="product">
           {productList.map((data) =>(
            <ProductItems
                product={data}
                key={data.id}
                onHandleAdd={() =>handleAddOrder(data.name,data.price,data.image)} 
                handleDelete ={DeleteItemProduct}             
            />
           ))}
            </div>
        </div>
        <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />   
        </>      
    );
}

export default Product;