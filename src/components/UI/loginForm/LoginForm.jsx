import React, { useState } from "react";
import Input from "../input/Input";
import SubmitButton from "../submitButton/SubmitButton";
import classes from "./LoginForm.module.css";
import users from "../../../data/users.json";
import ErrorMessage from "../../errorMessage/ErrorMessage";

const LoginForm = ({ submit }) => {
  const [loginError, setLoginError] = useState(false);
  const [isRegistered, setIsRegistered] = useState(true);
  const [user, setUser] = useState({
    login: "",
    password: "",
    username: "",
  });

  const userExists = () => {
    for (const userItem in users) {
      if (
        userItem === user.login &&
        users[userItem].password === user.password
      ) {
        return true;
      }
    }
    return false;
  };

  const login = (e) => {
    e.preventDefault();
    if (userExists()) {
      submit(users[user.login]);
    }
    setLoginError(true);
  };

  const signUp = (e) => {
    e.preventDefault();
    if (!userExists()) {
      users[user.login] = { ...user };
    }
  };

  return (
    <>
      <form className={classes.myLoginForm}>
        {loginError && <ErrorMessage />}
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
        <p>
          Don't have an account?{" "}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setIsRegistered(false);
            }}
          >
            Create one!
          </button>
        </p>
        <SubmitButton login={login} value="Log In" />
      </form>
    </>
  );
};

export default LoginForm;
