import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      className={classes.myInput}
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value)
      }}
    />
  );
};

export default Input;
