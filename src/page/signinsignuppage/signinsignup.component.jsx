import React from 'react'
import './signinsignup.style.scss'
import Signin from '../../components/signin/signin.component'
import SignUp from '../../components/sign up/signup.component'

const SigninSignup =()=>(
    <div className='sign-in-sign-up'>
        <Signin/>
        <SignUp/>
    </div>
)

export default SigninSignup