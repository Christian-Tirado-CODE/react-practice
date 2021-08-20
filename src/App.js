import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './context/auth-context';
const emailReducer = (prevState, action) => {
    return {value: '', isValid: false};

};

function App() {
  /* 
     Sometimes we pass in data to a component via props but that component doesn't use the data it just forwards it to a child component.
     In bigger apps is common to see large prop chains but it would be nice if a component receives from a parent that does not forward state/data from another component.
    Context is a component-wide state storage.

    We need the provider component so that the context default value can be changed.
     */
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
     const userLogInformation = localStorage.getItem("isLoggedIn");
     if(userLogInformation === "1"){
       setIsLoggedIn(true);
     }
     
  }, []);


   

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    
      <AuthContext.Provider value={{ 
        isLoggedIn: isLoggedIn
    }}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
  
  );
}

export default App;
