import React from 'react';
import './cartitem.style.scss';
import { connect } from 'react-redux';

const cartItem = ({cartItems}) => {
    return(
        <div className='cart-items'>
            {
                cartItems.map(({id, imageUrl, name, quantity, price})=>(
                <div>
                <div className='cart-item' key={id}>
                <img src={imageUrl} alt='item' className='image'/>
                <div className='cart-item-info'>
                <span className='name'>{name}</span>
                <span className='total'>{`${quantity} x $ ${price}`}</span>
                </div>
                </div>
                <hr/>
                </div>    
                ))
            }
        </div>
        )
}

const mapStateToProps = ({cart:{cartItems}}) =>({
    cartItems
})

export default connect(mapStateToProps)(cartItem);