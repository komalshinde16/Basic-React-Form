import React, { useState } from "react";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>
        {isLogin ? (
          <>
            <div className="form">
              <h2>Login Form</h2>
              <input type="text" placeholder="Email" />
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "black",
                  }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {/* <input type="password" placeholder="Password" /> */}
              <a href="#">Forgot password ?</a>
              <button>Login </button>
              <p>
                Not a member ?{" "}
                <a href="#" onClick={() => setIsLogin(false)}>
                  Sign Up now
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="form">
              <h2>SignUp Form</h2>
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder=" Confirm Password" />
              <button>SignUp</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthForm;
