import React from "react";
import classes from "./submitButton.module.css";

const SubmitButton = ({ submit, value }) => {
  return (
    <input
      type="submit"
      className={classes.mySubmitButton}
      onClick={(e) => {
        e.preventDefault()
        submit(e)
      }}
      value={value}
    />
  );
};

export default SubmitButton;
