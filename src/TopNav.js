import React from "react";
import "./TopNav.css";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="top-nav">
      <Link to="/home">
        <h1>Locker Tracker</h1>
      </Link>
      <div className="nav-btn">
        <Link to="/home">Home</Link>
        <Link to="/directory">Directory</Link>
        <Link to="/locker">Locker</Link>
        <Link to="/">Logout</Link>
      </div>
    </div>
  );
};

export default TopNav;
