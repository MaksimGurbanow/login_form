import React from 'react'
import Input from '../input/Input';
import SubmitButton from '../submitButton/SubmitButton';

const RegisterForm = () => {
  return (
    <form className={classes.myLoginForm}>
    <h3 style={{ textAlign: "center" }}>Sign Up</h3>
    <Input
      type="text"
      name="username"
      placeholder="Create username"
      value={user.username}
      onChange={(e) => setUser({ ...user, username: e.target.value })}
    />
    <Input
      type="text"
      name="email"
      placeholder="Enter email"
      value={user.login}
      onChange={(e) => setUser({ ...user, login: e.target.value })}
    />
    <Input
      type="password"
      name="password"
      placeholder="Create password"
      value={user.password}
      onChange={(e) => setUser({ ...user, password: e.target.value })}
    />

    <p>
      Already registered?{" "}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setIsRegistered(true);
        }}
      >
        Sign In!
      </button>
    </p>
    <SubmitButton login={signUp} value="Sign Up"/>
  </form>
  )
}

export default RegisterForm