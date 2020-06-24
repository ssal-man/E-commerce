import React from 'react';
import './App.css';
import Homepage from './page/homepage/homepage.component'
import { Switch, Route } from 'react-router-dom';

const Hats =() =>{
  return (
    <div>
      <h1>HATS</h1>
    </div>
  )
}


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/hats'component={Hats}/>
      </Switch>
    </div>
  );
}

export default App;
