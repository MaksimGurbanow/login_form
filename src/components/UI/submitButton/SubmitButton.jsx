import React from "react";
import classes from "./submitButton.module.css";

const SubmitButton = ({ login }) => {
  return (
    <input
      type="submit"
      className={classes.mySubmitButton}
      onClick={(e) => login(e)}
      value="Log In"
    />
  );
};

export default SubmitButton;
