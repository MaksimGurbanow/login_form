import { useState } from 'react';
import './App.css';
import LoginForm from './components/UI/loginForm/LoginForm';
import HomePage from './components/homepage/HomePage';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [hasAccount, setHasAccount] = useState(true)
  const [user, setUser] = useState({
    login: "",
    password: "",
    username: ""
  });

  const Inputs = [
    {type: "text", name: "login", value: "", placeholder:"Enter login"},
    {type: "password", name: "password", value: "", placeholder:"Enter password"},
    {type: "text", name: "username", value: "", placeholder:"Enter username"}
  ]

  const handleChange = (value) => {
    setUser(value)
  }

  const handleSubmit = (userData) => {
    setUser(userData)
    setIsAuth(true)
  }

  const handleClick = () => {
    setHasAccount(!hasAccount)
  }

  return (
    <div className='App'>
      {
        isAuth ?
          <HomePage user={user} />
          :
          hasAccount ?
            <LoginForm
              submit={handleSubmit}
              change={handleChange}
              click={handleClick}
              Inputs={Inputs}
            />
            :
            <LoginForm
              submit={handleSubmit}
              change={handleChange}
              click={handleClick}
            />
      }
    </div>
  )
}

export default App;
