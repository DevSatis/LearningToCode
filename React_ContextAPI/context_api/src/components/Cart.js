import React from 'react';  
import './Styles.css';

const Cart = () => {
  return (
    <div>
      <span style={{fontSize: 30}}> My Cart</span>
      <br />
      <span style={{fontSize: 30}}>Total: Rs.100</span>
      <div className='productContainer'>
        {}
      </div>
    </div>
  )
}

export default Cart;