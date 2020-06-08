import React, { useContext, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import UserPage from "./components/UserPage";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";
import { LogInContext } from "./components/ContextApi";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useContext(LogInContext);

  useEffect(() => {
    const token = window.localStorage.getItem("StayLogIN");

    if (token === "true") {
      setIsLoggedIn(true);
      history.push("/");
    } else {
      setIsLoggedIn(false);
      window.localStorage.removeItem("token");
      history.push("/login");
    }
  }, []);

  const history = useHistory();

  return (
    <>
      <NavBar />
      <Switch>
        {/* { isLoggedIn ?  <Redirect to="/" /> : <Route path="/login" component={Login} />   }  */}
        <Route path="/login" component={Login} />

        <PrivateRoute exact path="/" component={UserPage} />
      </Switch>
    </>
  );
}

export default App;
