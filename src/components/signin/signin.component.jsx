import React from 'react'
import './signin.style.scss'
import Forminput from '../forminput/forminput.component'
import CustomButton from '../custombutton/custombutton.component';
import { auth,SignInWithGoogle } from '../../firebase/firebase.utils'

class Signin extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:'',
        }
    }

    handleSubmit =async event =>{
        event.preventDefault();
        const {email, password} = this.state
        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email:'',password:''})
        }catch(error){
            console.error(error)
        }
    }

    handleChange = event =>{
        const {value, name} = event.target
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='signin'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form >
                    <Forminput name='email' type='email' 
                    value={this.state.email} required 
                    onChange={this.handleChange} label='email'/>
                    <Forminput name='password' type='password' 
                    value={this.state.password} required 
                    onChange={this.handleChange} label='password'/>
                    <div className="buttons">
                    <CustomButton  onClick={this.handleSubmit}>Submit</CustomButton>
                    <CustomButton  onClick={ SignInWithGoogle} googleSignIn={true} >Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin   