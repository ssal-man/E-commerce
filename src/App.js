import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import Homepage from './page/homepage/homepage.component';
import Shoppage from './page/shoppage/shoppage.component';
import SigninSignup from './page/signinsignuppage/signinsignup.component';
import { Switch, Route,Redirect  } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import { createUserProfile } from './firebase/firebase.utils';
import { connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component {

  unsubscribeFromAuth=null; 

  componentDidMount(){
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await  createUserProfile(userAuth)
        userRef.onSnapshot(snapshot=>{
          setCurrentUser(
            {
              id:snapshot.id,
              ...snapshot.data()
            }
          )
        })//snapshot
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div>
      <Header/>
      <hr/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={Shoppage}/>
        <Route exact path='/signin' render={()=>this.props.currentUser?<Redirect to='/'/>:<SigninSignup/>}/>
      </Switch>
    </div>
  );
}
}

const mapStateToProps = (state) => ({
  currentUser:selectCurrentUser(state)
})

const mapDispatchToPropsApp = dispatch =>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToPropsApp)(App);
