import React,{useState} from 'react';
import logo from './logo.svg';

import {Switch,Route,Redirect} from "react-router-dom";
import UserPage from './components/UserPage';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';



function App() {


  return (
    <>
    <NavBar/>
     <Switch>
     
     <Route path="/login" component={Login} />   
     <PrivateRoute exact path="/" component={UserPage} />
     </Switch>
    </>
  );
}

export default App;

   
  