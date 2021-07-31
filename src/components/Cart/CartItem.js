import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
const CartItem = (props) => {
  const { name, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  const increaseQtyHandler = () => {
     dispatch(cartActions.increaseQuantity(name));

  };

  const decreaseQtyHandler = () => {
     dispatch(cartActions.decreaseQuantity(name));

  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseQtyHandler}>-</button>
          <button onClick={increaseQtyHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
