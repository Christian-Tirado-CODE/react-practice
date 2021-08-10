import { Fragment } from "react";
import { useEffect } from "react";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Notification from "../Notification/Notification";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";


let isInitial = true;
const Cart = (props) => {
  const isCartShowing = useSelector((state) => state.cart.isShowing);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    const sendCartData = async () => {

      if(isInitial){
        isInitial = false;
        return;
    }
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data",
        })
      );

      

      const response = await fetch(
        "https://react-cart-a44ed-default-rtdb.firebaseio.com/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) throw new Error("Sending cart data failed");

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully",
        })
      );
    };

    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    });
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
