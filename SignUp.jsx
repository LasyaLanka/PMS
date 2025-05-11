import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUp() {
  const navigate = useNavigate(); // Initialize useNavigate hook
  
  const [role, setRole] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form validation here (if needed)

    // After successful form submission, redirect to the login page
    navigate('/login');
  };

  return (
    <>
      <div className="signup-container">
        <h3 className="form-title">Sign Up to PMS</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="role" className="form-label">I am a</label>
            <select
              className="form-select"
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">-- Select Role --</option>
              <option value="landlord">Landlord</option>
              <option value="tenant">Tenant</option>
              <option value="manager">Property Manager</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="fullname" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              name="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="yourname@example.com"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Mobile Number</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g., 9876543210"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Create Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Create Account</button>
          <div className="mt-3 text-center">
            Already have an account? <a href="/login">Login here</a>
          </div>
        </form>
      </div>

      <style>
        {`
          body {
            background-image: url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
          }

          .signup-container {
            max-width: 500px;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.95);
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }

          .form-title {
            text-align: center;
            margin-bottom: 25px;
          }

          /* Overlay to make text more readable */
          body::before {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.3);
            z-index: -1;
          }
        `}
      </style>
    </>
  );
}

export default SignUp;
