import React from "react";
import classes from "./HomePage.module.css";

const HomePage = ({ user }) => {
  return (
    <div className={classes.homepage}>
      <nav className={classes.navigation}>
        <ul>
          <li>Courses</li>
          <li>Achievements</li>
          <li>Friends</li>
        </ul>
      </nav>

      <div>
        <pre className={classes.greeting}>
          <h1>My learning</h1>
          <br />
          <h2> Hello, {user.username}.</h2>
          {user.isAdmin ? <p>You have admin access</p> : null}
        </pre>
      </div>
    </div>
  );
};

export default HomePage;
