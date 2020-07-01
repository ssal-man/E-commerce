import React from 'react'
import './custombutton.style.scss'

const CustomButton = ({children ,googleSignIn, inverted, ...otherprops})=>{
    return(
        <button className={`${inverted?'inverted':''} 
        ${googleSignIn?'google-sign-in ':''}
        custom-button`} {...otherprops}>
            {children}
        </button>
    )
}

export default CustomButton;