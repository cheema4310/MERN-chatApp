import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h5>
            Our team is constantly working to improve the user experience and
            add new features, so be sure to check back often for updates. Thank
            you for your support!
          </h5>
        </div>
        <div className={classes.right}>
          <ul>
            <li>
              <a href="mailto:cheema4310@gmail.com" className={classes.email}>
                Get in Touch
              </a>
            </li>
            <li>
              <Link to="/feedback" className={classes.feedback}>
                Leave Feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
