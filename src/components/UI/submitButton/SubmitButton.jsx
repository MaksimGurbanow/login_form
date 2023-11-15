import React from 'react'
import classes from "./submitButton.module.css"

const SubmitButton = () => {
  return (
    <button type="submit" className={classes.mySubmitButton}>Log in</button>
  )
}

export default SubmitButton