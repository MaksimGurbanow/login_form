import React, { useState } from "react";
import Input from "../input/Input";
import SubmitButton from "../submitButton/SubmitButton";
import classes from "./LoginForm.module.css";
import CloseButton from "../closeButton/CloseButton";

const LoginForm = () => {
  const [open, setOpen] = useState(true);

  if (open)
    return (
      <form className={classes.myLoginForm}>
        <CloseButton
          callback={(e) => {
            e.preventDefault();
            setOpen(false);
          }}
        />
        <h3 style={{ textAlign: "center" }}>Sign In</h3>
        <Input name="login" placeholder="Enter login" />
        <Input name="password" placeholder="Enter password" />
        <SubmitButton />
      </form>
    );
};

export default LoginForm;
