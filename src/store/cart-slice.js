import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {cartItems: [], isShowing: true};
//{ title: 'Test Item', quantity: 3, total: 18, price: 6 }
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addItem(state, action){
            const cartItemIdx = state.cartItems.findIndex(p => p.name === action.payload.name);
            if(cartItemIdx < 0)
                state.cartItems.push({...action.payload.product, quantity: 1});
        
            else
                state.cartItems[cartItemIdx].quantity++;
        },
        increaseQuantity(state, action){
            state.cartItems.forEach(item => {
                if(item.name === action.payload)
                    item.quantity++;
            });
        },
        decreaseQuantity(state, action){
            state.cartItems.forEach(item => {
                if(item.name === action.payload && item.quantity > 1)
                    item.quantity--;
            });
        },
        toggleCart(state){
            state.isShowing = !state.isShowing
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;