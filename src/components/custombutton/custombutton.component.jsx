import React from 'react'
import './custombutton.style.scss'

const CustomButton = ({children ,googleSignIn, ...otherprops})=>{
    return(
        <button className={`${googleSignIn?'google-sign-in ':''}custom-button`} {...otherprops}>
            {children}
        </button>
    )
}

export default CustomButton