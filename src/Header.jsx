import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <div>
      <header>
        <nav>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Home
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
