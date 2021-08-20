import React, {useContext} from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './context/auth-context';


function App() {
  /* 
     Sometimes we pass in data to a component via props but that component doesn't use the data it just forwards it to a child component.
     In bigger apps is common to see large prop chains but it would be nice if a component receives from a parent that does not forward state/data from another component.
    Context is a component-wide state storage.

    We need the provider component so that the context default value can be changed.
     */

    const authCtx = useContext(AuthContext);
  
  return (
    
     <React.Fragment>
      <MainHeader onLogout={authCtx.logoutHandler} />
      <main>
        {!authCtx.isLoggedIn && <Login  />}
        {authCtx.isLoggedIn && <Home  />}
      </main>
      </React.Fragment>
  
  );
}

export default App;
