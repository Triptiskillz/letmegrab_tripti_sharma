import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  // State to manage the user's login status and username
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  // Check if the user is logged in on component mount
  useEffect(() => {
    // Fetch user data from local storage
    const storedUser = JSON.parse(localStorage.getItem("loginData"));

    if (storedUser && storedUser.username) {
      // If user data is present, set login status and username
      setIsLoggedIn(true);
      setUsername(storedUser.username);
    }
  }, []);

  // Function to handle user logout
  const handleLogout = () => {
    // Clear user data from local storage and reset state
    localStorage.removeItem("loginData");
    setIsLoggedIn(false);
    setUsername("");
    // Redirect to the login page
    window.location.href = "/login";
  };

  return (
    <nav className="navbar navbar-dark bg-dark pe-4 ps-4">
      {/* Logo and Home link */}
      <Link className="navbar-brand fw-bold" to="/">
        <img src={logo} alt="Logo" />
      </Link>
      {/* Navigation links and login/logout buttons */}
      <div>
        {/* Home link */}
        <Link className="text-white text-decoration-none pe-4" to="/">
          Home
        </Link>

        {/* Conditional rendering based on login status */}
        {isLoggedIn ? (
          // If logged in, display Product link, welcome message, and logout button
          <>
            <Link
              className="text-white text-decoration-none pe-4"
              to="/product"
            >
              Product
            </Link>
            <span className="text-white me-4">Welcome, {username}</span>
            <button
              className="btn btn-outline-light rounded-0"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          // If not logged in, display Login and Sign up buttons
          <>
            <Link className="text-white text-decoration-none pe-4" to="/login">
              <button type="button" className="btn btn-outline-light rounded-0">
                Login
              </button>
            </Link>
            <Link className="text-white text-decoration-none pe-4" to="/signup">
              <button type="button" className="btn btn-light rounded-0">
                Sign up
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
