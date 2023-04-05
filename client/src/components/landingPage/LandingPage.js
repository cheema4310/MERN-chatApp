import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./LandingPage.module.css";

function LandingPage() {
  const navigate = useNavigate();

  const chatHandler = () => {
    navigate("/chat");
  };
  return (
    <div className={classes.landingPage}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <div className={classes.text}>
            Connect with anyone, anywhere, anytime - with our simple and secure
            chat app.
          </div>
          <div className={classes.btn} onClick={chatHandler}>
            Chat Room
          </div>
        </div>
        <div className={classes.right}></div>
      </div>
    </div>
  );
}

export default LandingPage;
