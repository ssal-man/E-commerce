import React from 'react'
import './header.style.scss'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/original.svg'

const Header=()=>{
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
            </div>
        </div>
    )
} 

export default Header