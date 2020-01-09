import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavLink } from "reactstrap";

const InNavBar = props => {
  const handleLogout = e => {
    e.preventDefault();
    props.setAuth(false);
    localStorage.clear("token");
    localStorage.clear("user");
  };

  return (
    <Navbar className="navBar">
      <Link to="/instructordashboard">Instructor Anywhere Fitness</Link>

      {props.isAuthenticated ? (
        <div className="navLinks">
          <NavLink href="/instructordashboard">Instructor Dashboard</NavLink>
          <NavLink href="/add-class">Add New Class</NavLink>
          <NavLink onClick={handleLogout}>Logout</NavLink>
        </div>
      ) : (
        <NavLink href="/">Login</NavLink>
      )}
    </Navbar>
  );
};

export default InNavBar;
