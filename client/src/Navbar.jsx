import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'
import logo from './assets/logo.png'
import user from './assets/user.png'

function Navbar(props) {
  
  if(props.authentication){
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
          <NavLink to='/home' className="freeCC">freeCodeCamp<img style={{width:'50px'}} src={logo}></img></NavLink>
          </div>
          <div className="navbar-buttons">
           <NavLink><img src={user} style={{width:'50px',border:'2px solid #737372',borderRadius:'50px'}}></img></NavLink> 
          </div>
        </div>
      </nav>
    );
  }
  else{
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
          <NavLink to='/home' className="freeCC">freeCodeCamp<img style={{width:'50px'}} src={logo}></img></NavLink>
          </div>
          <div className="navbar-buttons">
           <NavLink to='/register'><button className="navbutton">Sign in</button></NavLink> 
          </div>
        </div>
      </nav>
    );
  }
  
}

export default Navbar;
