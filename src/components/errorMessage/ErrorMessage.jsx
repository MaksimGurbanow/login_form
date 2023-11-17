import React from 'react'
import classes from "./ErrorMessage.module.css"

const ErrorMessage = () => {
  return (
    <div className={classes.warning}>
    Incorrect login or password. Try again.
  </div>
  )
}

export default ErrorMessage