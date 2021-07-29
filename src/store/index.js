import { createStore } from "redux";

const initialState = {
    counter: 0,
    showCounter: true
}
const counterReducer = (state = initialState, action) => {
    /* 
    IMPORTANT RULE: NEVER MUTATE STATE DIRECTLY. 
    RETURN A NEW OBJECT WITH THE CHANGES YOU WANT TO MAKE IN THE STATE. 
     A BAD EXAMPLE WOULD BE: 
       state.counter++;
    */
    if(action.type === "INCREMENT"){
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }
    if(action.type === "DECREMENT"){
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }
    if(action.type === "INCREASE_BY_GIVEN_AMOUNT"){
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }
    if(action.type === "TOGGLE_COUNTER"){
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }

    return state;
};

const store = createStore(counterReducer);

export default store;