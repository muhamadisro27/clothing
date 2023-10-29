import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  Value,
  RemoveButton,
} from "./checkout-item.style.jsx";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  const { addItemToCart, clearItemFromCart, removeItemFromCart } =
    useContext(CartContext);

  const removeItemHandler = (currentItem) => removeItemFromCart(currentItem);

  const addItemHandler = () => addItemToCart(cartItem);

  const clearItemHandler = (currentItem) => clearItemFromCart(currentItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={() => removeItemHandler(cartItem)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addItemHandler(cartItem)}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price} </BaseSpan>
      <RemoveButton onClick={() => clearItemHandler(cartItem)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
