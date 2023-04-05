import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./LoginPage.module.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // store following values in datatbase
    console.log(email);
    console.log(password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className={classes.loginPage}>
      <div className={classes.wrapper}>
        <div className={classes.loginForm}>
          <h2>Enter your Login Credentials</h2>

          <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes.email}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={classes.password}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={classes.btn}>
              Login
            </button>
          </form>
          <h5 className={classes.register}>
            Click here to create an account.{" "}
            <Link to="/register">Register?</Link>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
