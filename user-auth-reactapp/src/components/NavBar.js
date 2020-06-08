import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  const clearToken = (e) => {
    window.localStorage.clear();
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="px-lg-5 py-lg-3  px-md-5">
        <Navbar.Brand
          style={{ letterSpacing: "0.2em", fontSize: "1.5em" }}
          className="navbar-brand px-lg-5 px-md-5"
          href="/Login"
        >
          {" "}
          Colleagues
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto px-lg-2">
            <Nav.Link active href="/">
              Colleagues List{" "}
            </Nav.Link>
            <Nav.Link active href="/login" onClick={clearToken}>
              Log Out{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
