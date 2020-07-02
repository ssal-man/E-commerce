import React from 'react';
import './checkout.style.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CheckoutItem } from '../../components/checkout item/checkoutitem.component';

const CheckOut = ({cartItem}) => {
    return(
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItem.map(item=><CheckoutItem key={item.id} cartItem={item}/>)
            }
            <div className='total'></div>
        </div>
        )
}

const mapStateToProps = createStructuredSelector({
    cartItem: selectCartItems
})

export default connect(mapStateToProps)(CheckOut);