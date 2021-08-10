import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {cartItems: [], isShowing: true};
//{ title: 'Test Item', quantity: 3, total: 18, price: 6 }
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {

      // REDUCERS MUST BE PURE, SIDE EFFECT FREE AND SYNCRONOUS.
      // SIDE EFFECTS AND ASYNCRONOUS CODE MUST BE DONE EITHER 
      // INSIDE A COMPONENT OR ON AN ACTION CREATOR

        addItem(state, action){
            const cartItemIdx = state.cartItems.findIndex(p => p.id === action.payload.product.id);
            if(cartItemIdx < 0)
                state.cartItems.push({...action.payload.product, quantity: 1, total: action.payload.product.price});
        
            else
                state.cartItems[cartItemIdx].quantity++;
        },
        removeItem(state, action){
            
           const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload);
            state.cartItems = updatedCartItems; 
        },

        increaseQuantity(state, action){
            state.cartItems.forEach(item => {
                if(item.id === action.payload)
                    item.quantity++;
                    item.total *= 2;

            });
        },
        decreaseQuantity(state, action){
            state.cartItems.forEach(item => {
                if(item.id === action.payload && item.quantity > 1){
                    item.quantity--;
                    item.total /= 2;
                }
            });
        },
        toggleCart(state){
            state.isShowing = !state.isShowing
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;