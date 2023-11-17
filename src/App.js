import { useState } from 'react';
import './App.css';
import LoginForm from './components/UI/loginForm/LoginForm';
import HomePage from './components/homepage/HomePage';
import users from "./data/users.json"
import ErrorMessage from './components/errorMessage/ErrorMessage';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [hasAccount, setHasAccount] = useState(true)
  const [errorDetected, setErrorDetected] = useState(false)
  const [user, setUser] = useState({
    login: "",
    password: "",
    username: ""
  });

  const errorMessages = {
    login: "Incorrect login or password",
    register: "User already exists"
  }

  const Inputs = [
    { type: "text", name: "username", value: "", placeholder: "Enter username" },
    { type: "text", name: "login", value: "", placeholder: "Enter login" },
    { type: "password", name: "password", value: "", placeholder: "Enter password" },
  ]

  const login = (userData, userExists) => {
    if (userExists) {
      setUser(users[userData.login])
      setIsAuth(true)
      return
    }
    setErrorDetected(true)
  };

  const signUp = (userData, userExists) => {
    if (!userExists) {
      setUser(userData);
      users[userData.login] = { ...userData };
      setIsAuth(true)
      return
    }
    setErrorDetected(true)
  };

  const handleClick = () => {
    setErrorDetected(false);
    setUser({});
    setHasAccount(!hasAccount);
  }

  return (
    <div className='App'>
      {
        isAuth ?
          <HomePage user={user} />
          :
          hasAccount ?
            <>
              {errorDetected && <ErrorMessage children={errorMessages.login} />}
              <LoginForm
                submit={login}
                click={handleClick}
                Inputs={Inputs.slice(1)}
                hint1={"Don't have an account? "}
                hint2={"Register!"}
              />
            </>
            :
            <>
              {errorDetected && <ErrorMessage children={errorMessages.register} />}
            <LoginForm
              submit={signUp}
              click={handleClick}
              Inputs={Inputs}
              hint1={"Already registered? "}
              hint2={"Log In!"}
            />
            </>
      }
    </div>
  )
}

export default App;
