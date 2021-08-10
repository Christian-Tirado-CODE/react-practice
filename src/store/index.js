import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cart-slice";
import UIReducer from "./ui-slice";

const store = configureStore({
  reducer: { cart: CartReducer, ui: UIReducer },
});

export default store;
