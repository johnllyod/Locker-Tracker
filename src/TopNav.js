import React from "react";
import "./TopNav.css";
import { Link } from "react-router-dom";
import { auth } from "./firebaseConfig";
import { signOut } from "firebase/auth";
const TopNav = () => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("Sign Out"))
      .catch((error) => console.log(error));
  };
  return (
    <div className="top-nav">
      <Link to="/home">
        <h1>Locker Tracker</h1>
      </Link>
      <div className="nav-btn">
        <Link to="/home">Home</Link>
        <Link to="/directory">Directory</Link>
        <Link to="/locker">Locker</Link>
        <button onClick={handleSignOut}>Logout</button>
      </div>
    </div>
  );
};

export default TopNav;
