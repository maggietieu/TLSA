import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/style.css';

const NavBar = () => {
    return (
   <div class="container-fluid d-flex align-items-center justify-content-between">

      <h1 class="logo"><a href="index.html">Thai Laos Student Association</a></h1>
      <a href="#about" class="get-started-btn scrollto">Sign Up</a>
      <a href="#about" class="get-started-btn scrollto">Login</a>

    </div>
    )
};

export default NavBar;
