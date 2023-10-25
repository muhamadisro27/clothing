import "./cart-dropdown.style.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const navigate = useNavigate();

  const { cartItems, setCartOpen } = useContext(CartContext);

  const goToCheckoutHandler = () => {
    navigate("/checkout");

    setCartOpen(false);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem, idx) => (
          <CartItem cartItem={cartItem} key={idx} />
        ))}
      </div>
      <Button
        attributes={{
          onClick: goToCheckoutHandler,
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
