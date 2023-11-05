import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  EmptyData
} from "./checkout.style.jsx";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);


  const renderCheckoutItem = (cartItems) => {
    return cartItems.length > 0
      ? cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      : (<EmptyData>No Data.</EmptyData>);
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
