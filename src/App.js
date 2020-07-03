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
import CheckOut from './page/checkout/checkout.component';
import Particles from 'react-particles-js';

const ParticleOption = {
  "particles": {
    "number": {
      "value": 213,
      "density": {
        "enable": false,
        "value_area": 1893.9543399174545
      }
    },
    "color": {
      "value": "#cacaca"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.0,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 10,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.2,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 400,
        "size": 4,
        "duration": 0.3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false
}
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
        <Particles className="particles"
          params={ParticleOption} />
      <Header/>
      <hr/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={Shoppage}/>
        <Route exact path='/signin' render={()=>this.props.currentUser?<Redirect to='/'/>:<SigninSignup/>}/>
        <Route exact path='/checkout' component={CheckOut}/>
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
