"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./index.css";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
  };

  const handleDemo = (e) => {
    e.preventDefault();
    setErrors([]);
  };

  return (
    <>
      <div className="login-form-logo-container">
        <Link href="/">
          <Image
            src={"/images/text_logo.png"}
            alt="neighborhood node"
            width={350}
            height={40}
            className="login-form-logo"
          />
        </Link>
      </div>

      <div className="login-info-box">
        <div className="login-signup-box">
          <div className="sub-login-signup-box">
            <div className="sub-login-signup-box-content">
              <h1 className="sub-login-signup-box-content-title">
                Welcome back
              </h1>
              <div className="sub-login-signup-box-content-choose-method">
                {/* ------------------------Where the signup credentials go--------------------- */}
                <form
                  className="login-form-email-password"
                  onSubmit={handleSubmit}
                >
                  <div className="login-form-sub-email-password">
                    <div className="login-form-email-input">
                      <div className="login-form-sub-email-input">
                        <ul>
                          {errors.map((error) => (
                            <li className="login-form-form-errors" key={error}>
                              {error}
                            </li>
                          ))}
                        </ul>
                        <div className="login-form-deep-sub-email-input">
                          <input
                            className="login-form-actual-email-input"
                            aria-disabled="false"
                            aria-label="Email address"
                            placeholder="Email Address"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="login-form-password-input">
                      <div className="login-form-sub-password-input">
                        <div className="login-form-deep-sub-password-input">
                          <input
                            className="login-form-actual-password-input"
                            aria-disabled="false"
                            aria-label="Password"
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="login-form-signup-continue-button">
                    <button
                      className="login-form-signup-continue-button-style"
                      aria-disabled="false"
                      type="submit"
                    >
                      Log in
                    </button>
                  </div>
                  <div className="login-form-signup-continue-button-2">
                    <button
                      className="login-form-signup-continue-button-style"
                      aria-disabled="false"
                      type="submit"
                      onClick={handleDemo}
                    >
                      Demo User Log In
                    </button>
                  </div>
                </form>
                <div className="new-to-neighborhood-node-prompt">
                  <span className="new-to-neighborhood-node-prompt-label">
                    New to Neighborhood Node?
                  </span>
                  <Link
                    className="new-to-neighborhood-node-prompt-label-link"
                    href="/sigin"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
