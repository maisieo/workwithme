import React from "react";
import { NavLink } from "react-router-dom";
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
          <ReactBootstrap.Nav.Link href="/">About</ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href="new-bubble">
            Create a bubble
          </ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href="join-bubble">
            Find a bubble
          </ReactBootstrap.Nav.Link>
        </ReactBootstrap.Nav>
        <ReactBootstrap.Button variant="outline-success" href="login">
          Login
        </ReactBootstrap.Button>
        <ReactBootstrap.Button variant="outline-info" href="register">
          Register
        </ReactBootstrap.Button>
      </ReactBootstrap.Navbar.Collapse>
    </ReactBootstrap.Navbar>
  );
}

export default Navbar1;
{
  /* <nav className="Navbar">
<ul>
<div>
</div>
<li><NavLink to="/" exact activeClassName="selected" className="navLink" >About</NavLink></li>
    <li><NavLink to="/new-bubble" activeClassName="selected" className="navLink">Create a bubble</NavLink></li>
    <li><NavLink to="/join-bubble" activeClassName="selected" className="navLink">Join an existing bubble</NavLink></li>
    <li><NavLink to="/login" activeClassName="selected" className="navLink">Login</NavLink></li>
</ul>
</nav> */
}
