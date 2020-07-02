import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/carticon.component';
import CartDropdown from '../cart dropdown/cartdropdown.component';
import { selectHiddenToggle } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

const Header=({currentUser, hidden, history})=>{
    return(
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    <h3>SHOP</h3>
                </Link>
                <Link className='option' to='/'>
                    <h3>CONTACTS</h3>
                </Link>
                {currentUser?
                <h3 className='option' onClick={()=>auth.signOut()}>SIGN OUT</h3>:
                <Link className='option' to='/signin'>
                    <h3>SIGN IN</h3>
                </Link>}
                <CartIcon/>
            </div>
            {hidden?null:
            <CartDropdown/>}
        </div>
    )
} 

const mapStateTopProps = state => ({
    currentUser:selectCurrentUser(state),
    hidden:selectHiddenToggle(state)
})

export default connect(mapStateTopProps)(Header);