import React,{useEffect, useState} from 'react'
import Button from '../../components/common/Button/Button'
import { Link } from 'react-router-dom'
import CartModal from '../../components/Modals/CartModal'
import './styles.scss'

function Header(props) {
  const [modal,setModal] = useState(false)
  const handleShowCart = () =>{
    setModal(true)
  }
  return (
    <>
      <div className="main-header">
       <div className="main-header__wrapper">
        <Link to={'/'} className={"main-header__Link"} >
          <h3 >SHOP</h3>
        </Link>
           <Button className="main-header__btn" 
          //  nameBtn={  data.length }
           iconBtn={<i className="fa-sharp fa-solid fa-cart-shopping"></i>} 
           OnClick={handleShowCart}
           />
      </div>
      <CartModal
           open={modal}
            onClose={() => setModal(false)}
        />
    </div>
   
    </> 
  )
}
export default Header
