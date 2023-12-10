import React, { useState, useEffect } from "react";
import img from "../images/Coffee.png";

const Login = () => {
  // State to manage login form data
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  // State to manage form validation errors
  const [errors, setErrors] = useState({});

  // State to store sign-up data retrieved from local storage
  const [signUpData, setSignUpData] = useState([]);

  // Retrieve signup data from local storage on component mount
  useEffect(() => {
    const storedSignUpData =
      JSON.parse(localStorage.getItem("signUpData")) || [];
    setSignUpData(storedSignUpData);
  }, []);

  // Handle input changes in the login form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  // Form validation function
  const validateForm = () => {
    const newErrors = {};

    if (!loginData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!loginData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Check if user exists in signup data
      const userExists = signUpData.some(
        (user) =>
          user.username === loginData.username &&
          user.password === loginData.password
      );

      if (userExists) {
        // Store login data in local storage
        localStorage.setItem("loginData", JSON.stringify(loginData));

        // Clear form fields
        setLoginData({
          username: "",
          password: "",
        });

        // Perform actions after successful login
        alert("Login successful!");
        window.location.href = "/product"; // Redirect to the product page
      } else {
        alert("Invalid username or password");
      }
    }
  };

  return (
    <section class="pb-4 pt-4">
      <div class="container">
        <div class="row justify-content-start align-items-center">
          <div class="col-lg-6">
            <img src={img} class="img-fluid" />
          </div>
          <div class="col-lg-6 pe-4 ps-4">
            <h1>Login</h1>
            <form className="mt-4">
              {/* Username input field */}
              <div className="form-group">
                <label htmlFor="username" className="text-secondary">
                  Username:
                </label>
                <input
                  type="text"
                  className={`form-control mt-1 rounded-0 ${
                    errors.username ? "is-invalid" : "border-secondary"
                  }`}
                  id="username"
                  name="username"
                  value={loginData.username}
                  onChange={handleInputChange}
                />
                {errors.username && (
                  <div className="invalid-feedback">{errors.username}</div>
                )}
              </div>

              {/* Password input field */}
              <div className="form-group">
                <label htmlFor="password" className="text-secondary">
                  Password:
                </label>
                <input
                  type="password"
                  className={`form-control mt-1 rounded-0${
                    errors.password ? "is-invalid" : "border-secondary"
                  }`}
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleInputChange}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>

              {/* Login button */}
              <button
                type="submit"
                className="btn btn-dark rounded-0 mt-4 w-100 btn-block"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
