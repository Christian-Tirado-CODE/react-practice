import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const Cart = (props) => {
  const isCartShowing = useSelector(state => state.cart.isShowing);
  const cartItems = useSelector(state => state.cart.cartItems);

  const cartItemList = cartItems.map(item => (<CartItem key={item.name} item={item} />))
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {isCartShowing && 
      (<ul>
        {cartItemList}
      </ul>)}
    </Card>
  );
};

export default Cart;
