import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../style/login/login-right.css";

function LoginRight() {
  const [email, setEmail] = useState("");
  const [password_hash, setpassword_hash] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const validateInputs = () => {
    let isValid = true;

    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password_hash.trim()) {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateInputs()) {
      try {
        const response = await axios.post("http://localhost:5001/login", {
          email,
          password_hash,
        });

        if (response.status === 200) {
          navigate("/Ticket");
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          alert("Invalid email or password");
        } else {
          console.error("Error:", error);
          alert("Something went wrong");
        }
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-header">
          <div className="login-title">Login to access your account</div>
        </div>
        <form className="form-content" onSubmit={handleSubmit}>
          <div className="input-field">
            <div className="input-wrapper">
              <input
                type="email"
                className="input-text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <div className="error">{emailError}</div>}
            </div>
          </div>
          <div className="input-field">
            <div className="input-wrapper">
              <input
                type="password"
                className="input-text"
                placeholder="Password"
                value={password_hash}
                onChange={(e) => setpassword_hash(e.target.value)}
              />

              {passwordError && <div className="error">{passwordError}</div>}
            </div>
          </div>
          <div className="options-container">
            <div className="CheckRem">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Password</label>
            </div>
            {/* <div className="forgot-password">Forgot Password</div> */}
          </div>
          <div className="login-btn-container">
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>
          {/* <div className="signup-link">
            <span className="signup-text">Don’t have an account? </span>
            <span className="signup-action">Sign up</span>
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default LoginRight;
