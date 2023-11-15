import React from 'react'

const LoginForm = () => {
  return (
    <form>
        <label htmlFor=""></label>
        <input type="text" name="login" placeholder="Enter login"/>
        <input type="password" name="password" placeholder="Enter password"/>
        <button type="submit">Log in</button>
    </form>
  )
}

export default LoginForm