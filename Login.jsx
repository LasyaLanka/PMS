import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = (e) => {
    e.preventDefault();
    // Show the alert message
    const confirmLogin = window.confirm("✅ Login successful! Click OK to proceed to the home page.");
    
    // If the user clicks "OK" on the confirmation dialog, navigate to the home page
    if (confirmLogin) {
      navigate("/home"); // Navigate to the home page
    }
  };

  return (
    <>
      <style>{`
        :root {
          --primary: #4a6fa5;
          --secondary: #166088;
          --accent: #4fc3f7;
          --dark: #1a2a3a;
          --light: #f8f9fa;
        }

        body, html, #root {
          margin: 0;
          padding: 0;
          height: 100%;
        }

        .admin-body {
          background: url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=2070&q=80') no-repeat center center fixed;
          background-size: cover;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          position: relative;
        }

        .admin-body::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(26, 42, 58, 0.85);
          z-index: 0;
        }

        .login-container {
          background: rgba(255, 255, 255, 0.95);
          padding: 40px;
          border-radius: 15px;
          width: 100%;
          max-width: 400px; /* Set max-width to ensure proper size */
          text-align: center;
          z-index: 1;
          position: relative;
        }

        .login-container h2 {
          margin-bottom: 20px;
        }

        .login-container input {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 14px;
        }

        .login-btn {
          width: 100%;
          padding: 15px;
          background: var(--primary);
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }

        .signup-link {
          margin-top: 20px;
        }

        .signup-link a {
          color: var(--secondary);
          text-decoration: none;
        }

        .signup-link a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="admin-body">
        <div className="login-container">
          <h2>Luxury Properties Admin Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit" className="login-btn">
              LOGIN
            </button>
          </form>
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
