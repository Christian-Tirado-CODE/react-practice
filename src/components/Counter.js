import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter-slice";
const Counter = () => {
  // useSelector - Custom hook that allows us to get slices of state from the store.
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);
  

  // useDispatch - Custom hook that allows us to dispatch an action.
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }
  const increaseByAmountHandler = () => {
     dispatch(counterActions.increase(5));
  }
  const decrementHandler = () => {
   dispatch(counterActions.decrement());
  }
  const toggleCounterHandler = () => {
   dispatch(counterActions.toggle());
  };




  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseByAmountHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

/*class Counter extends Component {
  constructor() {
    super();
  }

  incrementHandler = () => {
    this.props.increment();
  };
  decrementHandler = () => {
    this.props.decrement();
  };
  toggleCounterHandler = () => {};

  render() {
    return (
      <Fragment>
        <main className={classes.counter}>
          <h1>Redux Counter</h1>
          <div className={classes.value}>{this.props.counter}</div>
          <div>
            <button onClick={this.incrementHandler.bind(this)}>
              Increment
            </button>
            <button onClick={this.decrementHandler.bind(this)}>
              Decrement
            </button>
          </div>
          <button onClick={this.toggleCounterHandler.bind(this)}>
            Toggle Counter
          </button>
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };
};
*/
export default Counter;
