import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../login copy.css';

const LoginForm = () => {
  const navigate = useNavigate(); // Initialize navigate from useNavigate

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here

    // Redirect to the new home page after successful login
    navigate("/provi-home"); // Change "/dashboard" to the desired path
  };

  return (
    <div className='provLog'>
      <center>
        <div className="wrapper">
          <form onSubmit={handleSubmit} className="form"> {/* Add onSubmit attribute */}
            <h2>Login to access your Scholarship Provider account</h2>
            <div className="input-field">
              <input type="text" required />
              <label>Enter your email</label>
            </div>
            <div className="input-field">
              <input type="password" required />
              <label>Enter your password</label>
            </div>
            <div className="forget">
              <label htmlFor="remember" className="remember">
                <input type="checkbox" id="remember" />
                <p>Remember me</p>
              </label>
              <a className='forg' href="#">Forgot password?</a>
            </div>
            <button type="submit" className="btn">Log In</button>
            <div className="register">
              <p className='dont'>Don't have an account? <Link to="/provider_reg" href="#">Register</Link></p>
            </div>
          </form>
        </div>
      </center>
    </div>
  );
};

export default LoginForm;
