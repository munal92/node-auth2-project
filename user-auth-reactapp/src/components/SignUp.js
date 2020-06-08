import React, { useState } from "react";
import { Container, Button, Row, Col, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Redirect, useHistory } from "react-router-dom";

const SignUp = () => {
  const [registerForm, setregisterForm] = useState({
    credientials: {
      username: "",
      password: "",
      department: "",
    },
  });
  const history = useHistory();
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    history.push("/login");
  };
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    e.persist();
    //  console.log("targetName", e.target.value);

    setregisterForm({
      ...registerForm,
      credientials: {
        ...registerForm.credientials,
        [e.target.name]: e.target.value,
      },
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("/api/auth/register", registerForm.credientials)
      .then((res) => {
        //  window.localStorage.setItem('token', res.data.token)
        // props.setIsLogin(true)
        history.push("/login");
        //console.log("Signup API", res);
      })
      .catch((err) => console.log(err));
  };
 // console.log("Signupstate", registerForm);
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="d-flex justify-content-center">
            <Form onSubmit={submitForm}>
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
                      Register instantly to see your colleagues!
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
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Select Your Department</Form.Label>
                    <Form.Control
                      as="select"
                      custom
                      name="department"
                      onChange={handleChange}
                    >
                      <option>CS</option>
                      <option>IOS</option>
                      <option>Sales</option>
                      <option>Finance</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" type="submit" onClick={submitForm}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignUp;
