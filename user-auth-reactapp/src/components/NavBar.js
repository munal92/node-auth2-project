import React from "react";
import { Navbar,NavDropdown,Nav } from "react-bootstrap";
const NavBar = () => {

  const clearToken = e => {
   
    window.localStorage.clear();
  }


  return (
    <>
   <Navbar collapseOnSelect expand="lg" className="px-lg-5 py-lg-3  px-md-5">
  <Navbar.Brand style={{letterSpacing: "0.2em",fontSize:'1.5em'}} className="navbar-brand px-lg-5 px-md-5" href="/"> Colleagues</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto px-lg-2">
      <Nav.Link active href="/login" onClick={clearToken} >Log Out </Nav.Link>
     
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
      {/* <nav class="navbar navbar-expand-lg navbar-light px-lg-5 py-lg-3  px-md-5" >
        <a style={{letterSpacing: "0.2em",fontSize:'1.5em'}}class="navbar-brand px-lg-5 px-md-5" href="/">
        Colleagues
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon px-md-5"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav ml-auto px-lg-5">
            <li class="nav-item ">
              <a class="nav-link" href="/login" onChange={clearToken}>
                Log Out 
              </a>
            </li>
            
          
          </ul>
        </div>
      </nav> */}
    </>
  );
};

export default NavBar;
