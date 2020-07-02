import React from 'react';
import './cartitem.style.scss';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const cartItem = ({cartItems}) => {
    return(
        <div className='cart-items'>
            {
                cartItems.length?
                cartItems.map(({id, imageUrl, name, quantity, price})=>(
                <div key={id}>
                <div className='cart-item'>
                <img src={imageUrl} alt='item' className='image'/>
                <div className='cart-item-info'>
                <span className='name'>{name}</span>
                <span className='total'>{`${quantity} x $ ${price}`}</span>
                </div>
                </div>
                <hr/>
                </div>    
                )):
                <span className='message'>Your cart is empty</span>
            }
        </div>
        )
}

const mapStateToProps = state =>({
    cartItems:selectCartItems(state)
})

export default connect(mapStateToProps)(cartItem);