import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <div className={classes.navigation}>
      <div className={classes.wrapper}>
        <div className={classes.logo}>
          <Link to="/">Schmooze</Link>
        </div>
        <div className={classes.navLinks}>
          <Link to="/chat" className={classes.chatLink}>
            Chat
          </Link>

          <Link to="/login" className={classes.loginLink}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
