import React from "react";
import SendIcon from "@mui/icons-material/Send";

import classes from "./MainCmp1.module.css";

function MainCmp() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.mainCmp}>
      <div className={classes.wrapper}>
        <div className={classes.sidebar}>
          <div className={classes.rooms}>
            <h3>Available Rooms</h3>
            <ul className={classes.roomList}>
              <li>First Room</li>
              <li>Second Room</li>
              <li>Third Room</li>
            </ul>
          </div>
          <div className={classes.members}>
            <h3>Members</h3>
            <ul className={classes.memberList}>
              <li>tom</li>
              <li>jerry</li>
              <li>jack</li>
              <li>tom</li>
              <li>jerry</li>
              <li>jack</li>
              <li>jack</li>
              <li>jack</li>
              <li>jack</li>
              <li>jack</li>
              <li>jack</li>
              <li>jack</li>
              <li>jack</li>
              <li>jack</li>
              <li>jack</li>
              <li>jack</li>
              <li>jack</li>
              <li>jack</li>
              <li>jack</li>
              <li>jack</li>
            </ul>
          </div>
        </div>
        <div className={classes.chatArea}>
          <div className={classes.msg_output}>
            <div className={classes.msgWindow}></div>
          </div>
          <div className={classes.msg_input}>
            <form onSubmit={handleSubmit} className={classes.msgForm}>
              <div className={classes.msgBox}>
                <input type="text" placeholder="Type here... " />
              </div>
              <button type="submit" className={classes.msgBtn}>
                <SendIcon style={{ color: "#d39e6fc9" }} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCmp;
