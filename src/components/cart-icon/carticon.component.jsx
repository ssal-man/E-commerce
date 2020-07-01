import React from 'react';
import './carticon.style.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import toggleCartHidden from '../../redux/cart/cart.action';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors.js';

const CartIcon = (props) =>{
    return(
        <div className='cart-icon' onClick={props.toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{props.itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch =>{
    return({
        toggleCartHidden:()=>dispatch(toggleCartHidden())
    })
}

const mapStateToProps = state => (
    {
        itemCount:selectCartItemsCount(state)
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);