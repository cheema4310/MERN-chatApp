import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./RegisterPage.module.css";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    if (password !== confirmPass) {
      document.getElementById("cPass").style.backgroundColor = "#FF7F7F";
      console.log("password does not match");
      return alert("Password doesn't match.");
    }
    console.log(email, password, confirmPass);
    console.log("you have logged in");

    setEmail("");
    setPassword("");
    setConfirmPass("");
  }
  return (
    <div className={classes.loginPage}>
      <div className={classes.wrapper}>
        <div className={classes.loginForm}>
          <h2>Join Now for Instant Access</h2>

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
            <div className={classes.password}>
              <input
                id="cPass"
                type="password"
                placeholder="Confirm Password"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={classes.btn}>
              Register
            </button>
          </form>
          <h5 className={classes.register}>
            Already Registered? <Link to="/login">Sign In</Link>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
