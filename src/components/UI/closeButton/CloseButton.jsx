import React from "react";
import classes from "./CloseButton.module.css";

const CloseButton = ({ callback }) => {
  return (
    <button type="button" onClick={(e) => callback(e)} className={classes.myBtn}>
      X
    </button>
  );
};

export default CloseButton;
