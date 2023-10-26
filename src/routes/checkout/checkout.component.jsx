import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.style.jsx";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  const renderCheckoutItem = (cartItems) => {
    return cartItems.length > 0
      ? cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      : "No Data";
  };

  const columns = ["Product", "Description", "Quantity", "Price", "Remove"];

  const total = 'TOTAL:'

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        {columns.map((column) => (
          <HeaderBlock key={column}>
            <span>{column}</span>
          </HeaderBlock>
        ))}
      </CheckoutHeader>
      {/* Render Checkout Item */}
      {renderCheckoutItem(cartItems)}
      <Total>{total} ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
