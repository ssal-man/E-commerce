import React from 'react';
import './checkoutitem.style.scss';
import { addItem } from '../../redux/cart/cart.action';

export const CheckoutItem = ({cartItem:{name, price, imageUrl, quantity }}) =>{
    return(
    <div className='checkout-item'>
        <div className='image-container'>
             <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='add-item'>&#10094;</div>
                {quantity}
                <div className='remove-item'>&#10095;</div>
            </span>
        <span className='price'>{price}</span>
        <div className='remove-button'>&#10005;</div>
    </div>
    )
}