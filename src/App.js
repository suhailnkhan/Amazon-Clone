import React from 'react';
import Header from './Header'
import {
  BrowserRouter as Router,Switch,Route} from "react-router-dom";

import './App.css';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login'

function App() {
  return (
    <Router>
    <div className="app">
   <Switch>
     <Route path="/checkout" > 
     <Header />
     <Checkout />
      
      </Route>
     <Route path="/login">
     <Header />
        <Login />
     </Route>  
     <Route path="/"> 
     <Header />
      <Home />
     </Route>     
 
   </Switch>

  


    </div> 
    </Router>
  );
}

export default App;
