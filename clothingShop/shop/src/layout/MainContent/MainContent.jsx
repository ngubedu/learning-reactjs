import React from 'react';
import Product from '../../components/Products/Product';
import './styles.scss'
const MainContent = props => {
    return (
        <div className='main-content'>
          <Product/>
        </div>
    );
};
MainContent.propTypes = {
    
};

export default MainContent;