import React from 'react';
import './Login.css'; 

const LoginPage = () => {
  return (
    <>
      {/* <div className="navbar">
      </div> */}

      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email/Username</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email or username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
