// LoginForm.js
import React, { useState } from "react";
import Input from "../input/Input";
import SubmitButton from "../submitButton/SubmitButton";
import classes from "./LoginForm.module.css";
import users from "../../../data/users.json";

const LoginForm = ({ submit, click, Inputs, hint1, hint2 }) => {
  const [user, setUser] = useState({
    login: "",
    password: "",
    username: "",
  });

  const handleChange = (name, value) => {
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleMethod = (e) => {
    e.preventDefault();
    const user_exists = userExists()
    submit(user, user_exists);
  };

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

  return (
    <>
      <form className={classes.myLoginForm}>
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
          {hint1}{" "}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              click();
            }}
          >
            {hint2}
          </button>
        </p>
        <SubmitButton submit={e => handleMethod(e)} value="Log In" />
      </form>
    </>
  );
};

export default LoginForm;
