import React from 'react';
import './cartdropdown.style.scss';
import CustomButton from '../custombutton/custombutton.component';
import CartItem from '../cart item/cartitem.component';

const CartDropdown = () =>{
    return(
        <div className='cart-dropdown'>
            <CartItem/>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown;