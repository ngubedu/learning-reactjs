import React, { useState,useEffect } from 'react';
import ProductItems from '../ProductItem/ProductItems';
import './styles.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { STATUS_CODE } from '../constants';
import productApis from '../apis/productApis';
import { Link } from 'react-router-dom';
import Button from '../common/Button/Button';
import CartModal from '../CartModal/CartModal';
function Product(props) {
    const [productList, setProductList] = useState([])
    const fetchData = async () => {
        const response = await productApis.getAll();
        // Check status for post api
        if (response.status === STATUS_CODE.OK) {
            setProductList(response.data);
        } else {
          toast.error('Get list failed.');
          console.log(response.status);
        }
      };
      useEffect(() => {
        fetchData();
      }, []); 
    
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
                isUpdate="false"
            />
           ))}
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
        </div>
            <CartModal/>
        </>
        
    );
}

export default Product;