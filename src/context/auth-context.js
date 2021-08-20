import React from "react";

// context = app/component wide state
const authContext = React.createContext({ // Could be any value but it is common to use an object.
    isLoggedIn: false
});

export default authContext;

// To use Context in the app there's two steps:
// 1. Provide the context - All components that need access have to be wrapped by the provider.
// 2. Consume the Context