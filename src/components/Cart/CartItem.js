import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
const CartItem = (props) => {
  const {id, title, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  const increaseQtyHandler = () => {
     dispatch(cartActions.increaseQuantity(id));

  };

  const decreaseQtyHandler = () => {
     dispatch(cartActions.decreaseQuantity(id));

  };

  const removeItemHandler = () => {
     dispatch(cartActions.removeItem(id));

  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
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
          <button onClick={removeItemHandler}>Remove</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
