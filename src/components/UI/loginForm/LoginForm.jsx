import React, { useState } from "react";
import Input from "../input/Input";
import SubmitButton from "../submitButton/SubmitButton";
import classes from "./LoginForm.module.css";
import CloseButton from "../closeButton/CloseButton";

const LoginForm = () => {
  const [open, setOpen] = useState(true);
  const [user, setUser] = useState({
    login: "",
    password: "",
  });
  const login = (e) => {
    e.preventDefault();
  };

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
        <Input
          type="text"
          name="login"
          placeholder="Enter login"
          value={user.login}
          onChange={(e) => setUser({ ...user, login: e.target.value })}
        />
        <Input
          type="password"
          name="password"
          placeholder="Enter password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <SubmitButton login={login} />
      </form>
    );
};

export default LoginForm;
