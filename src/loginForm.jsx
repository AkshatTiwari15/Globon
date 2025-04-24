import React from 'react';
const LoginPage = () => {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        body {
          background-color: #f4f4f4;
        }

        .navbar {
          background: #333;
          color: white;
          padding: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar .logo {
          font-size: 20px;
          font-weight: bold;
        }

        .navbar ul {
          list-style: none;
          display: flex;
        }

        .navbar ul li {
          margin: 0 15px;
        }

        .navbar ul li a {
          color: white;
          text-decoration: none;
          font-size: 16px;
        }

        .navbar ul li a:hover {
          text-decoration: underline;
        }

        .login-container {
          width: 100%;
          max-width: 400px;
          margin: 100px auto;
          background: white;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border-radius: 5px;
        }

        .login-container h2 {
          text-align: center;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .form-group input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .btn {
          width: 100%;
          background: #333;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }

        .btn:hover {
          background: #555;
        }
      `}</style>

      <div className="navbar">
        <div className="logo">Login Page</div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

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
