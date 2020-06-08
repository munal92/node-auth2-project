import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory, Link, Route } from "react-router-dom";
//import {LogInContext} from "./ContextApi"

import SignUp from "./SignUp";

const Login = (props) => {
  
  const history = useHistory();

  const [loginForm, setLoginForm] = useState({
    credientials: {
      username: "",
      password: "",
    },
    isChecked: false,
  });

  const [vibrate, setVibrate] = useState({
    clsName: "",
  });

 
  const handleChange = (e) => {
    e.persist();
    // console.log("targetName", e.target.name);
    if (e.target.name === "isChecked") {
      setLoginForm({
        ...loginForm,
        isChecked: loginForm.isChecked ? false : true,
      });
    } else {
      setLoginForm({
        ...loginForm,
        credientials: {
          ...loginForm.credientials,
          [e.target.name]: e.target.value,
        },
      });
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
if(loginForm.credientials.username !== "" && loginForm.credientials.password !== "" ){
  axiosWithAuth()
  .post("/api/auth/login", loginForm.credientials)
  .then((res) => {
   
    window.localStorage.setItem("token", res.data.token);
    if(loginForm.isChecked){
      window.localStorage.setItem("StayLogIN",true)
      
    }else{
      window.localStorage.setItem("StayLogIN",false)
      
    
    }
    history.push("/");

    //console.log("API", res);
  }).catch((err) => console.log(err));
}else{
  setVibrate({ clsName: "error" });

      setTimeout(() => {
        setVibrate({ clsName: "" });
        
      }, 1000);
    }

    
  };

   console.log("logindeki state", loginForm.isChecked);

  //const [isLoggedIn , setIsLoggedIn ] = React.useContext(LogInContext);
//console.log(isLoggedIn)

  return (
    <section className="loginSec">
      <Container className="d-flex justify-content-center">
        <Form onSubmit={submitForm}  className={vibrate.clsName} >
          <Row>
            <Col className="text-center py-3">
              <h2>Welcome!</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="username"
                  placeholder="Enter Username"
                  name="username"
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  Register or Login instantly to see your colleagues!
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
                {/* <Form.Control type="password" placeholder="Password" /> */}
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Keep me signed in"
                  name="isChecked"
                  checked={loginForm.isChecked}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button variant="info" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="py-3 align-items-center">
              <h6>
                Need an account? <Link to="/login/signup">Sign Up.</Link>
              </h6>
            </Col>
          </Row>
        </Form>
      </Container>
      <Route path="/login/signup">
        <SignUp />
      </Route>
    </section>
  );
};

export default Login;
