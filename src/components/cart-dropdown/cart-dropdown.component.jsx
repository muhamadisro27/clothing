import "./cart-dropdown.style.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.style.jsx";

const CartDropdown = () => {
  const navigate = useNavigate();

  const { cartItems, setCartOpen } = useContext(CartContext);

  const goToCheckoutHandler = () => {
    navigate("/checkout");

    setCartOpen(false);
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length > 0 ? (
          cartItems.map((cartItem, idx) => (
            <CartItem cartItem={cartItem} key={idx} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.base}
        attributes={{
          onClick: goToCheckoutHandler,
        }}
      >
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
