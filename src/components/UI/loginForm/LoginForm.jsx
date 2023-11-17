import React, { useState } from "react";
import Input from "../input/Input";
import SubmitButton from "../submitButton/SubmitButton";
import classes from "./LoginForm.module.css";
import users from "../../../data/users.json";
import ErrorMessage from "../../errorMessage/ErrorMessage";

const LoginForm = ({ submit, change, click, Inputs }) => {
  const [loginError, setLoginError] = useState(false);
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

  const handleChange = (name, value) => {
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
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
        {Inputs.map((input) => (
          <Input
            key={input.name}
            type={input.type}
            name={input.name}
            value={user[input.name]}
            placeholder={input.placeholder}
            onChange={(value) => handleChange(input.name, value)}
          />
        ))}
        <p>
          Don't have an account?{" "}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              click();
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
