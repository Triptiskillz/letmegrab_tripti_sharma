import React, { useState } from "react";
import img from "../images/Coffee.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  // State to manage form data and errors
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // State to store signup data
  const [signUpData, setSignUpData] = useState([]);

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate the form data
  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Save data to local storage
      const newSignUpData = [...signUpData, formData];
      localStorage.setItem("signUpData", JSON.stringify(newSignUpData));

      // Clear form fields
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      // Update state with the new signup data
      setSignUpData(newSignUpData);

      alert("Sign up successful!");
      navigate("/login");
    }
  };

  return (
    <section className="pb-4 pt-4">
      <div className="container">
        <div className="row justify-content-start align-items-center">
          <div className="col-lg-6">
            <img src={img} className="img-fluid" alt="Coffee" />
          </div>
          <div className="col-lg-6 pe-4 ps-4">
            <h1>Sign Up</h1>
            <form className="mt-2">
              {/* Username input */}
              <div className="form-group pb-2">
                <label htmlFor="username" className="text-secondary">
                  Username:
                </label>
                <input
                  type="text"
                  className={`form-control mt-1 rounded-0 ${
                    errors.username ? "is-invalid" : " border-secondary"
                  }`}
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
                {errors.username && (
                  <div className="invalid-feedback">{errors.username}</div>
                )}
              </div>

              {/* Email input */}
              <div className="form-group pb-2">
                <label htmlFor="email" className="text-secondary">
                  Email:
                </label>
                <input
                  type="email"
                  className={`form-control  mt-1 rounded-0 ${
                    errors.email ? "is-invalid" : " border-secondary"
                  }`}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              {/* Password input */}
              <div className="form-group pb-2">
                <label htmlFor="password" className="text-secondary">
                  Password:
                </label>
                <input
                  type="password"
                  className={`form-control  mt-1 rounded-0 ${
                    errors.password ? "is-invalid" : " border-secondary"
                  }`}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>

              {/* Confirm Password input */}
              <div className="form-group pb-2">
                <label htmlFor="confirmPassword" className="text-secondary">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  className={`form-control mt-1 rounded-0 ${
                    errors.confirmPassword ? "is-invalid" : " border-secondary"
                  }`}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                {errors.confirmPassword && (
                  <div className="invalid-feedback">
                    {errors.confirmPassword}
                  </div>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="btn btn-dark rounded-0 mt-4 w-100 btn-block"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
