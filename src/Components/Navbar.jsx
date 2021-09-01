import React from 'react';
import image1 from '../Images/bulma-logo.png';
import { NavLink } from 'react-router-dom';
import '../App.css'

const Navbar = () => {
  return (
    <>

    <nav class="navbar" role="navigation" aria-label="main navigation">
   <div class="navbar-brand">
    <div class="navbar-item">
      <img src={image1} width="100%" height="100%" />
    </div>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    
    <div class="navbar-start">
      <NavLink class="navbar-item" to="/">Home</NavLink>
      <NavLink class="navbar-item" to="/">Campers</NavLink>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <NavLink class="button is-light" to="/add-camper">Add New Camper</NavLink>
          {/* <NavLink class="button is-primary"><strong>Sign up</strong></NavLink> */}
          {/* <NavLink class="button is-light">Sign out</NavLink> */}
        </div>
      </div>
    </div>

  </div>
</nav>

    </>
  );
}

export default Navbar;
