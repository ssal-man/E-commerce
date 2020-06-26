import React from 'react'
import './header.style.scss'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/original.svg'
import { auth } from '../../firebase/firebase.utils'

const Header=({currentUser})=>{
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
            </div>
        </div>
    )
} 

export default Header