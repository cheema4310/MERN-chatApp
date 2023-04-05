import React, { useState } from "react";
import classes from "./FeedbackCmp.module.css";

function FeedbackCmp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username, email, textArea);

    setUsername("");
    setEmail("");
    setTextArea("");
  };
  return (
    <div className={classes.feedback}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <img
            src="https://images.unsplash.com/photo-1609301123762-eb2c3240c6ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="feedbackImg"
          />
        </div>
        <div className={classes.right}>
          <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes.firstname}>
              <input
                type="text"
                placeholder="First Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className={classes.email}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={classes.msg}>
              <label>
                Is there anything we could do to improve our services?
              </label>
              <textarea
                rows={6}
                cols={50}
                className={classes.textArea}
                value={textArea}
                onChange={(e) => setTextArea(e.target.value)}
              />
            </div>
            <button type="submit" className={classes.btn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCmp;
