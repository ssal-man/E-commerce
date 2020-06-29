import React from 'react';
import './cartdropdown.style.scss';
import CustomButton from '../custombutton/custombutton.component';

const CartDropdown = () =>{
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'/>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown;