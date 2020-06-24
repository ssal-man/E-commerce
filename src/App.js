import React from 'react';
import './App.css';
import Homepage from './page/homepage/homepage.component'
import Shoppage from './page/shoppage/shoppage.component'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop'component={Shoppage}/>
      </Switch>
    </div>
  );
}

export default App;
