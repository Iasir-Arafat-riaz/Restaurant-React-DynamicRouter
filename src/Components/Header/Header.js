import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        to="/home"
        style={{textDecoration:"none"}}
      >
        Home
      </NavLink>
      <NavLink activeStyle={{
          fontWeight: "bold",
          color: "red",
        }} to="/contact" style={{marginLeft:"5px", textDecoration:"none"}}> Contact</NavLink>
    </div>
  );
};

export default Header;
