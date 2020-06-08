import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Container, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { Switch, Route, Redirect } from "react-router-dom";
const UserPage = () => {
  const [userData, setUserData] = useState([{}]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axiosWithAuth()
      .get("/api/department")
      .then((res) => {
        //  console.log("userPageAPI", res.data)
        setUserData(res.data);
      })
      .catch((err) => {
        console.log("userPageAPI error", err);
      });
  };

  return (
    <section className="UserListSec">
      <Container>
        <Row className="justify-content-md-center">
          <Col className="col-lg-2 text-center pt-2 ">
            <h2 className="badge-info text-wrap " >
              User List
            </h2>
          </Col>
        </Row>

        <div className="container d-flex flex-row flex-wrap">
          {userData.map((item, index) => (
            <Col sm={12} lg={4} className="pt-3" key={index}>
              <ListGroup>
                <ListGroup.Item className="mb-1 font-weight-bold" key={index}>
                  {index + 1}. {item.username}
                  <small style={{backgroundColor:"white"}}>
                    <br />
                    Department: {item.department}
                  </small>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default UserPage;
