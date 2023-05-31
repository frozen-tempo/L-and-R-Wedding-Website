import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import hamburgerIcon from "./images/hamburger.svg";

function App() {
  function toggleNav() {
    var navItems = document.getElementById("nav-items");
    navItems.classList.contains("showNav")
      ? navItems.classList.remove("showNav")
      : navItems.classList.add("showNav");
  }
  return (
    <div className="App">
      <nav className="nav-bar">
        <img
          src={require("./images/flowers-left.png")}
          className="navbar-decoration"
        />
        <div className="nav-items" id="nav-items">
          <NavLink
            style={({ isActive }) => {
              return { borderBottom: isActive ? "3px solid white" : "" };
            }}
            className="plain-nav-item"
            exact
            to="/Home"
            onClick={toggleNav}
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return { borderBottom: isActive ? "3px solid white" : "" };
            }}
            className="plain-nav-item"
            exact
            to="/OurStory"
            onClick={toggleNav}
          >
            Our Story
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return { borderBottom: isActive ? "3px solid white" : "" };
            }}
            className="plain-nav-item"
            exact
            to="/Itinerary"
            onClick={toggleNav}
          >
            Itinerary
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return { borderBottom: isActive ? "3px solid white" : "" };
            }}
            className="plain-nav-item"
            exact
            to="/Venue"
            onClick={toggleNav}
          >
            Travel Information
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return { borderBottom: isActive ? "3px solid white" : "" };
            }}
            className="plain-nav-item"
            exact
            to="/Food"
            onClick={toggleNav}
          >
            Food
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return { borderBottom: isActive ? "3px solid white" : "" };
            }}
            className="plain-nav-item"
            exact
            to="/Registry"
            onClick={toggleNav}
          >
            Registry
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "white" : "",
                color: isActive ? "#265D3C" : "",
                borderRadius: isActive ? "5px" : "5px",
              };
            }}
            className="button-nav-item"
            exact
            to="/RSVP"
            onClick={toggleNav}
          >
            <div className="RSVP-button">RSVP</div>
          </NavLink>
        </div>
        <img
          src={hamburgerIcon}
          className="hamburger-button"
          onClick={toggleNav}
        />
        <img
          src={require("./images/flowers-right.png")}
          className="navbar-decoration"
        />
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
