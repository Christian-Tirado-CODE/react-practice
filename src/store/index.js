import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counter-slice";
import AuthReducer from "./auth-slice";







const store = configureStore({
    reducer: {
        counter: CounterReducer, auth: AuthReducer}
    
});




export default store;