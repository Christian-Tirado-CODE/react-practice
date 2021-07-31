import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
const CartButton = (props) => {
  const dispatch = useDispatch();
  const numOfItems = useSelector(state => state.cart.cartItems.length);
  
  const toggleCartHandler = () => {
      dispatch(cartActions.toggleCart());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{numOfItems}</span>
    </button>
  );
};

export default CartButton;
