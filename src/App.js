import React from 'react';
import './App.css';
import Header from './components/header/header.component'
import Homepage from './page/homepage/homepage.component'
import Shoppage from './page/shoppage/shoppage.component'
import SigninSignup from './page/signinsignuppage/signinsignup.component'
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      currentUser : null
    }
  }

  unsubscribeFromAuth=null; 

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <hr/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={Shoppage}/>
        <Route exact path='/signin' component={SigninSignup}/>
      </Switch>
    </div>
  );
}
}

export default App;
