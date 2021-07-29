import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'; 
const Counter = () => {
  // useDispatch - Custom hook that allows us to dispatch an action.
  const dispatch = useDispatch();

  const incrementHandler = () => {
     dispatch({type: 'INCREMENT'});
  }
  const decrementHandler = () => {
     dispatch({type: 'DECREMENT'});
  }
  const toggleCounterHandler = () => {};
// useSelector - Custom hook that allows us to get slices of state from the store.
  const counter = useSelector(state => state.counter);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
