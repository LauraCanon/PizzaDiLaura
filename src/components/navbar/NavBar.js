import "./navbar.css";
import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Pizza Di Laura</h1>
      <div className="links" ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/customize">Customize</Link>
        <Link to="/historial">Orders</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </div>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </nav>
  );
}

export default Navbar;
