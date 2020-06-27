import React from 'react'

import CustomButton from '../custombutton/custombutton.component'
import Forminput from '../forminput/forminput.component'
import {auth, createUserProfile} from '../../firebase/firebase.utils'
import './signup.style.scss'

class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault()
        const { displayName, email, password, confirmPassword} = this.state
        if (password!==confirmPassword){
            alert("Passwords doesn't match! Try Again")
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            )
            createUserProfile(user,{displayName })

            this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
            })
        }catch(error){
            console.error(error)
        }
    }

    handleChange=event=>{
        const {name, value} = event.target

        this.setState({[name]:value})
    }

    render(){
        const { displayName, email, password, confirmPassword} = this.state
        return(
            <div className='sign-up'>
                <h2 className='title'>I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>

                    <Forminput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required>
                    </Forminput>

                    <Forminput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required>
                    </Forminput>

                    <Forminput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required></Forminput>

                    <Forminput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required></Forminput>

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp