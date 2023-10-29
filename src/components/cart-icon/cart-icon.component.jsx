import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from "./cart-icon.style.jsx";

const CartIcon = () => {
  const { isCartOpen, setCartOpen, cartCount } = useContext(CartContext);

  function handleCart() {
    setCartOpen(!isCartOpen);
  }

  return (
    <CartIconContainer onClick={handleCart}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
