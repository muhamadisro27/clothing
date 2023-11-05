import { useDispatch, useSelector } from "react-redux";
import { selectCartCount, selectCartOpen } from "../../store/cart/cart.selector";
import { setCartOpen } from "../../store/cart/cart.action";
import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from "./cart-icon.style.jsx";

const CartIcon = () => {

  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectCartOpen);

  console.log(cartCount);

  function handleCart() {
    dispatch(setCartOpen(!isCartOpen));
  }

  return (
    <CartIconContainer onClick={handleCart}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
