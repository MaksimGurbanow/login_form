import { useState } from 'react';
import './App.css';
import LoginForm from './components/UI/loginForm/LoginForm';
import HomePage from './components/homepage/HomePage';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState({})
  const handleSubmit = (userData) => {
    setUser(userData)
    setIsAuth(true)
  }
  if(isAuth) return (
    <div className='App'>
      <HomePage user={user}/>
    </div>
  )
  else {
    return (
      <div className="App">
        <LoginForm submit={handleSubmit}/>
      </div>
    );
  }
}

export default App;
