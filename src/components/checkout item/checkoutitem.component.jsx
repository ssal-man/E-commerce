import React from 'react';
import './checkoutitem.style.scss';
import { addItem, decreaseQuantity, removeItem } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';

const CheckoutItem = ({ cartItem, dispatch }) => {
    const {name, price, imageUrl, quantity}=cartItem
    return(
    <div className='checkout-item'>
        <div className='image-container'>
             <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='remove-item' onClick={() => dispatch(decreaseQuantity(cartItem))}>&#10094;</div>
                {quantity}
                <div className='add-item' onClick={()=>dispatch(addItem(cartItem))}>&#10095;</div>
            </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=>dispatch(removeItem(cartItem))}>&#10005;</div>
    </div>
    )
}


export default connect(null)(CheckoutItem);
