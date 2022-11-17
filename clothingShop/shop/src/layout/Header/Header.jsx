import React,{useState} from 'react'
import Button from '../../components/common/Button/Button'
import './styles.scss'
import { Link } from 'react-router-dom'
import CartModal from '../../components/Modals/CartModal'

function Header(props) {
  const [modal,setModal] = useState(false)
 
  return (
    <>
      <div className="main-header">
       <div className="main-header__wrapper">
        <Link to={'/'} className={"main-header__Link"} >
          <h3 >SHOP</h3>
        </Link>
           <Button className="main-header__btn" iconBtn={<i className="fa-sharp fa-solid fa-cart-shopping"></i>} nameBtn={CartModal.length} OnClick={() => setModal(true)}/>
      </div>
    </div>
    <CartModal
           open={modal}
            onClose={() => setModal(false)}
        />
    </> 
  )
}
export default Header
