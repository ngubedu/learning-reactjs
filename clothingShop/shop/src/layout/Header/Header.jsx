import React from 'react'

import Button from '../../components/common/Button/Button'
import './styles.scss'
import { Link } from 'react-router-dom'

function Header(props) {
  const ShowProductOrder = () =>{
    alert("Cái này chưa làm nha")
  }
  return (
    <div className="main-header">
       <div className="main-header__wrapper">
        <Link to={'/'} className={"main-header__Link"} >
          <h3 >SHOP</h3>
        </Link>
           <Button className="main-header__btn" iconBtn={<i className="fa-sharp fa-solid fa-cart-shopping"></i>} nameBtn={''} OnClick={ShowProductOrder}/>
      </div>
    </div>
  )
}
export default Header
