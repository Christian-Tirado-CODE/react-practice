import React, {useState, useEffect} from "react";

// context = app/component wide state
const AuthContext = React.createContext({ // Could be any value but it is common to use an object.
    isLoggedIn: false,
    onLogout: () => {}, // We add variables and functions here in the default context object for IDE autocompletion.
    onLogin: (email, password) => {}
});


// Custom Context Provider Context where we manage the state logic in one central place.

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const userLogInformation = localStorage.getItem("isLoggedIn");
        if(userLogInformation === "1"){
          setIsLoggedIn(true);
        }
        
     }, []);
   
    
    const loginHandler = () => {
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
    }

    const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
    }

    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
    }}>{props.children}</AuthContext.Provider>
}


export default AuthContext;

// To use Context in the app there's two steps:
// 1. Provide the context - All components that need access have to be wrapped by the provider.
// 2. Consume the Context