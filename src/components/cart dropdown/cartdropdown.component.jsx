import React from 'react';
import './cartdropdown.style.scss';
import CustomButton from '../custombutton/custombutton.component';
import CartItem from '../cart item/cartitem.component';
import { withRouter } from 'react-router-dom';
import toggleCartHidden from '../../redux/cart/cart.action';
import { connect } from 'react-redux';

const CartDropdown = ({history,dispatch}) =>{
    return(
        <div className='cart-dropdown'>
            <CartItem/>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}


export default withRouter(connect(null)(CartDropdown));