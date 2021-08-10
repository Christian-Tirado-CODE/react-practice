import { Fragment } from "react";
import { useEffect } from "react";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Notification from "../Notification/Notification";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

let isInitial = true;
const Cart = (props) => {
  const isCartShowing = useSelector((state) => state.cart.isShowing);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  useEffect(() => {

    if(isInitial){
       isInitial = false;
       return;
    }
  }, [cart, dispatch]);

  const cartItemList = cartItems.map((item) => (
    <CartItem key={item.name} item={item} />
  ));
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}{" "}
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        {isCartShowing && <ul>{cartItemList}</ul>}
      </Card>
    </Fragment>
  );
};

export default Cart;
