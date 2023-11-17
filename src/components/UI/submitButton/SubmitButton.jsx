import React from "react";
import classes from "./submitButton.module.css";

const SubmitButton = ({ login, value }) => {
  return (
    <input
      type="submit"
      className={classes.mySubmitButton}
      onClick={(e) => login(e)}
      value={value}
    />
  );
};

export default SubmitButton;
