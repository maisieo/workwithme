import React from "react";
// import { NavLink } from "react-router-dom";
import "./Navbar.css";
import * as ReactBootstrap from "react-bootstrap";

function Navbar1() {
  return (
    <ReactBootstrap.Navbar bg="light" expand="lg">
      <ReactBootstrap.Navbar.Brand href="/">
        Work With Me
      </ReactBootstrap.Navbar.Brand>
      <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
      <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
        <ReactBootstrap.Nav className="mr-auto">
          <ReactBootstrap.Nav.Link href="/about">About</ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href="new-bubble">
            Create a bubble
          </ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href="join-bubble">
            Find a bubble
          </ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href="all-bubbles" >
            <strong>Admin view</strong>
          </ReactBootstrap.Nav.Link>
        </ReactBootstrap.Nav>
        <div className="user-login-reg">
            <ReactBootstrap.Button variant="outline-success" href="login" className="login">
              Login
            </ReactBootstrap.Button>
            <ReactBootstrap.Button variant="outline-info" href="register" className= "register">
              Register
            </ReactBootstrap.Button>
        </div>
      </ReactBootstrap.Navbar.Collapse>
    </ReactBootstrap.Navbar>
  );
}

export default Navbar1;
{

}
