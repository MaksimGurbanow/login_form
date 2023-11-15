import React from "react";
import classes from "./Input.module.css"

const Input = ({name, placeholder}) => {
  return (
      <input 
      className={classes.myInput}
      type="text" name={name} placeholder={placeholder} />
  );
};

export default Input;
