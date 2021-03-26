import React from 'react';
import { NavLink } from 'react-router-dom';
import"./Navbar.css"


function Navbar({bubbles}) {

    return (
        <nav className="Navbar">
            <ul>
            <div>
        {/* {bubbles}
        <ul>{bubbles.map(b=>(<li> Firstname: {b.firstname}, Workstations: {b.workstations}</li>))}</ul> */}
          </div>
            <li><NavLink to="/" exact activeClassName="selected" className="navLink" >About</NavLink></li>
                <li><NavLink to="/new-bubble" activeClassName="selected" className="navLink">Create a bubble</NavLink></li>
                <li><NavLink to="/join-bubble" activeClassName="selected" className="navLink">Join an existing bubble</NavLink></li>
                <li><NavLink to="/login" activeClassName="selected" className="navLink">Login</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;