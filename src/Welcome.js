import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="content">
        <div className="login-form">
          <h2>Welcome</h2>
          <p>Enter your Credentials to access your account</p>
          <form action="#">
            <label htmlFor="Email">Email address</label>
            <input
              type="email"
              name="email"
              id="Email"
              placeholder="Enter your email"
              required
            />
            <br />
            <span>
              <label htmlFor="Pass">Password</label>
              <a href="/#" style={{ float: "right" }}>
                Forgot password
              </a>
            </span>
            <input
              type="password"
              name="pass"
              id="Pass"
              placeholder="Enter your password"
              required
            />
            <br />
            <button type="button" name="login">
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="content">
        <img src="/images/welcome.jpg" alt="Welcome" />
      </div>
    </div>
  );
};

export default Welcome;
