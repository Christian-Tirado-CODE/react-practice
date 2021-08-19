import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

const emailReducer = (prevState, action) => {
    return {value: '', isValid: false};

};

function App() {
  /* 
  useReducer for STATE MANAGEMENT:
    Sometimes you have more complex state, for example, if you have multiple states, 
    multiple ways of changing it or dependencies to other states.

    If the state is complex, useState() becomes harder or more error prone.

    useReducer might be a substitute for useState if you need more powerful state management.

    The downside is that it might be more complicated to use and requires more setup.

    useReducer is a good idea when you have state that belongs together and/or you have state updates based on other state.
   
    const [stateSnapshot, dispatchFunction] = useReducer(reducerFunction, initialState, initFunction);
    reducerFunction = (prevState, action) => newState
    */
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
     const userLogInformation = localStorage.getItem("isLoggedIn");
     if(userLogInformation === "1"){
       setIsLoggedIn(true);
     }
     
  }, []);


   /*
    What is a side effect?
    Everything else outside of React's main job which is to render UI and React to User Input.
    Examples: sending http requests to backend servers, timers, storing data in browser storage.

    Side effects are managed with the useEffect hook.
    Has two parameters: 1. A function that runs AFTER every component evaluation IF the dependencies changed.
                        2. Dependencies of this effect. The function only runs if the dependencies changed.
  */

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
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
