import { createSlice, configureStore } from "@reduxjs/toolkit";


const initialState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
        // REDUX TOOLKIT HAS A PACKAGE CALLED IMGUR THAT "ALLOWS" CODE TO MUTATED DIRECTLY.
        // BEHIND THE SCENES IT CREATES A NEW STATE OBJECT, KEEP THE STATE WHICH WE ARE NOT EDITING AND THEN OVERRIDES THE OLD ONE.
            state.counter++;
        },
        increase(state, action){
            state.counter = state.counter + action.payload;
        },
        decrement(state) {
            state.counter--;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
})


const store = configureStore({
    reducer: counterSlice.reducer
    
});

export const counterActions = counterSlice.actions;

export default store;