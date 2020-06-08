import React,{useContext, useEffect} from 'react';
import {Switch,Route,useHistory} from "react-router-dom";
import UserPage from './components/UserPage';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
import {LogInContext} from "./components/ContextApi"



function App() {
  const [isLoggedIn , setIsLoggedIn ] = useContext(LogInContext);
  

  useEffect(() => {
    
    const token = window.localStorage.getItem("StayLogIN")
    console.log("cekiyomu",token)
    if(token === "true"){
      console.log("if",token)
      setIsLoggedIn(true);
      history.push("/");

    }else {
      console.log("if yanlis",token)
      setIsLoggedIn(false);
      window.localStorage.removeItem('token')
      history.push("/login");
      
    }
  },[])

console.log(isLoggedIn)
  const history = useHistory();



  return ( 
   
    <>
   
    <NavBar/>
     <Switch>
     
    {/* { isLoggedIn ?  <Redirect to="/" /> : <Route path="/login" component={Login} />   }  */}
    <Route path="/login" component={Login} />
    
   
    <PrivateRoute exact path="/" component={UserPage} />
    
    
     </Switch>
     
    </>
    
  );
}

export default App;

   
  