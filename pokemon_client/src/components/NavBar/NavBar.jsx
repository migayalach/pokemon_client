// COMPONET'S

// HOOK'S
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

// LIBRARY

//REDUX

// JAVASCRIP

// STYLESHEET'S

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      <div>
        <p>Pokedex</p>
      </div>
    </div>
  );
}

export default NavBar;
