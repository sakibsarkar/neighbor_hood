import Link from "next/link";
import { useState } from "react";
import "./index.css";
const SigninForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [neighborhoodId, setNeighborhoodId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password) {
      return setErrors(["Please input a password with atleast 6 characters"]);
    } else {
      setErrors([]);
    }
  };

  const handleDemo = (e) => {
    e.preventDefault();
    setErrors([]);
  };
  return (
    <div className="hero">
      <span>
        <div className="hero-img"></div>
      </span>
      <div className="hero-info-box">
        <div className="hero-signup-box">
          <div className="sub-hero-signup-box">
            <div className="sub-hero-signup-box-content">
              <h1 className="sub-hero-signup-box-content-title">
                Discover your neighborhood
              </h1>
              <div className="sub-hero-signup-box-content-choose-method">
                {/* ------------------------Where the signup credentials go--------------------- */}
                <form className="email-password" onSubmit={handleSubmit}>
                  <ul>
                    {errors.map((error) => (
                      <li className="signup-errors" key={error}>
                        {error}
                      </li>
                    ))}
                  </ul>
                  <div className="sub-email-password">
                    <div className="email-input">
                      <div className="sub-email-input">
                        <div className="password-input">
                          <div className="sub-password-input">
                            <div className="deep-sub-password-input">
                              <input
                                className="actual-password-input"
                                aria-disabled="false"
                                aria-label="First Name"
                                placeholder="First Name"
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="password-input">
                          <div className="sub-password-input">
                            <div className="deep-sub-password-input">
                              <input
                                className="actual-password-input"
                                aria-disabled="false"
                                aria-label="Last Name"
                                placeholder="Last Name"
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="password-input">
                          <div className="sub-password-input">
                            <div className="deep-sub-password-input">
                              <select
                                className="actual-password-input"
                                value={neighborhoodId}
                                onChange={(e) =>
                                  setNeighborhoodId(e.target.value)
                                }
                              >
                                <option value="">Select a neighborhood</option>
                                <option value={1}>Mission District</option>
                                <option value={2}>Marina District</option>
                                <option value={3}>Pacific Heights</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="deep-sub-email-input">
                          <input
                            className="actual-email-input"
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
                    <div className="password-input">
                      <div className="sub-password-input">
                        <div className="deep-sub-password-input">
                          <input
                            className="actual-password-input"
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
                  <div className="signup-continue-button">
                    <button
                      className="signup-continue-button-style"
                      aria-disabled="false"
                      type="submit"
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-login-box">
          <div className="have-an-account-prompt">
            <span className="have-an-account-prompt-label">
              Have an account?
            </span>
            <Link className="have-an-account-prompt-label-link" href="/login">
              Log in
            </Link>
          </div>
          <div className="signup-continue-button">
            <button
              className="signup-continue-button-style"
              aria-disabled="false"
              type="submit"
              onClick={handleDemo}
            >
              Demo User Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
