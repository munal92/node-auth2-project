import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Container, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const UserPage = () => {
  const [userData, setUserData] = useState([{}]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axiosWithAuth()
      .get("/api/department")
      .then((res) => {
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
          <Col className="col-lg-4 text-center py-4 ">
            {/* <h2 className="badge-info text-wrap " > */}
            <h2>- Colleagues List -</h2>
          </Col>
        </Row>

        <div className="container d-flex flex-row flex-wrap">
          {userData.map((item, index) => (
            <Col sm={12} lg={4} className="pt-1" key={index}>
              <ListGroup>
                <ListGroup.Item
                  className="mb-1 font-weight-bold shadow p-3 mb-5 bg-white rounded"
                  key={index}
                >
                  {index + 1}. {item.username}
                  <small style={{ backgroundColor: "white" }}>
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
