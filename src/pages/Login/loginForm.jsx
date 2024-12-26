import React from "react";
import "./loginForm.css";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { GoArrowUpRight } from "react-icons/go";
import { TiSocialFacebook } from "react-icons/ti";

function LoginForm() {
  return (
    <div className="login-form py-5 my-5">
      <h1 className="fw-bold pb-3">Log In</h1>
      <Col className="fw-normal">We're glad to see you again!</Col>
      <br />
      <Col className="fw-normal">
        Don't have an account?{" "}
        <Link to="#" className="sign-up-link">
          Sign Up!
        </Link>
      </Col>
      <div className="d-flex justify-content-center align-items-center">
        <div className="border rounded p-5 mt-5 form">
          <form className="pb-4">
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              required
              className="mb-4"
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              className="mb-4"
            />

            <div className="remember-me d-flex justify-content-between align-items-center pb-3">
              <div className="checkbox-container">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember</label>
              </div>
              <Link to="/" className="lost-link">
                Lost your password?
              </Link>
            </div>

            <button type="submit" className="login-button">
              Log In <GoArrowUpRight className="fs-4" />
            </button>
          </form>

          <div className="or-container pb-3">
            <span className="line"></span>
            <p className="or">OR</p>
            <span className="line"></span>
          </div>

          <div className="social-login">
            <button className="facebook">
              <TiSocialFacebook /> Continue with Facebook
            </button>
            <button className="google">Continue with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
